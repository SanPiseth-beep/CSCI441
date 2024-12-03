// controllers/rentController.js
const crypto = require('crypto');
const Bike = require('../models/Bike');
const Station = require('../models/Station');
const Payment = require('../models/Payment');
const Rent = require('../models/Rent');

exports.getAvailableStationsAndBikes = async (req, res) => {
  try {
    const stations = await Station.findAll();
    const bikes = await Bike.findAll({ where: { isAvailable: true } });
    res.json({ stations, bikes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching stations and bikes.' });
  }
};

exports.rentBike = async (req, res) => {
  const { bikeId, userId, cardNumber, cardExpiry, cardCVC, amount, destination, phoneNumber } = req.body;

  // Log the request data
  console.log('Request data:', req.body);

  try {
    const availableBike = await Bike.findOne({ where: { bikeId, isAvailable: true } });

    if (!availableBike) {
      return res.status(400).json({ message: 'Bike is not available.' });
    }

    const encryptionKey = process.env.ENCRYPTION_KEY;
    if (!encryptionKey) {
      throw new Error('ENCRYPTION_KEY is not defined in the environment variables');
    }

    const algorithm = 'aes-256-cbc';
    const key = crypto.scryptSync(encryptionKey, 'salt', 32);
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encryptedCardNumber = cipher.update(cardNumber, 'utf8', 'hex');
    encryptedCardNumber += cipher.final('hex');

    const cipherExpiry = crypto.createCipheriv(algorithm, key, iv);
    let encryptedCardExpiry = cipherExpiry.update(cardExpiry, 'utf8', 'hex');
    encryptedCardExpiry += cipherExpiry.final('hex');

    const cipherCVC = crypto.createCipheriv(algorithm, key, iv);
    let encryptedCardCVC = cipherCVC.update(cardCVC, 'utf8', 'hex');
    encryptedCardCVC += cipherCVC.final('hex');

    const payment = await Payment.create({
      userId,
      cardNumber: encryptedCardNumber,
      cardExpiry: encryptedCardExpiry,
      cardCVC: encryptedCardCVC,
    });

    const rent = await Rent.create({
      userId,
      bikeId,
      status: 'rented',
      startTime: new Date(),
      destination,
      phoneNumber,
    });

    availableBike.isAvailable = false;
    await availableBike.save();

    res.status(200).json({ message: 'Bike rented successfully!', rentId: rent.rentalId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
};

exports.returnBike = async (req, res) => {
  const { bikeId, stationId, userId } = req.body;

  try {
    const rent = await Rent.findOne({ where: { bikeId, userId, status: 'rented' } });

    if (!rent) {
      return res.status(400).json({ message: 'No active rent found for this bike and user.' });
    }

    const endTime = new Date();
    const duration = (endTime - new Date(rent.startTime)) / (1000 * 60 * 60); // duration in hours
    const cost = duration * 2; // $2 per hour

    // Update the rent record
    rent.endTime = endTime;
    rent.cost = cost;
    rent.status = 'returned';
    await rent.save();

    // Update the payment record
    const payment = await Payment.findOne({ where: { userId: rent.userId } });
    payment.payDate = endTime;
    payment.amount = cost;
    await payment.save();

    // Update the bike record
    const bike = await Bike.findOne({ where: { bikeId } });
    bike.isAvailable = true;
    bike.stationId = stationId;
    bike.status = 'Available';
    await bike.save();

    res.status(200).json({ message: 'Bike returned successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
};