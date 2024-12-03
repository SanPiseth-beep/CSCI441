// controllers/rentController.js
const Bike = require('../models/Bike');
const Station = require('../models/Station');
const Payment = require('../models/Payment');
const Rent = require('../models/Rent');
const crypto = require('crypto');

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
  const { bikeId, userId, cardNumber, cardExpiry, cardCVC, amount } = req.body;

  try {
    const availableBike = await Bike.findOne({ where: { id: bikeId, isAvailable: true } });

    if (!availableBike) {
      return res.status(400).json({ message: 'Bike is not available.' });
    }

    const encryptedCardNumber = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY).update(cardNumber, 'utf8', 'hex');
    const encryptedCardExpiry = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY).update(cardExpiry, 'utf8', 'hex');
    const encryptedCardCVC = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY).update(cardCVC, 'utf8', 'hex');

    const payment = await Payment.create({
      userId,
      cardNumber: encryptedCardNumber,
      cardExpiry: encryptedCardExpiry,
      cardCVC: encryptedCardCVC,
      amount,
    });

    const rent = await Rent.create({
      userId,
      bikeId,
      status: 'rented',
      startTime: new Date(),
    });

    availableBike.isAvailable = false;
    await availableBike.save();

    res.status(200).json({ message: 'Bike rented successfully!', rentId: rent.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
};

exports.returnBike = async (req, res) => {
  const { rentId, stationId } = req.body;

  try {
    const rent = await Rent.findOne({ where: { id: rentId, status: 'rented' } });

    if (!rent) {
      return res.status(400).json({ message: 'Invalid rent ID or bike already returned.' });
    }

    const bike = await Bike.findOne({ where: { id: rent.bikeId } });
    bike.isAvailable = true;
    await bike.save();

    const endTime = new Date();
    const duration = (endTime - new Date(rent.startTime)) / (1000 * 60 * 60); // duration in hours
    const cost = duration * 2; // $2 per hour

    rent.status = 'returned';
    rent.endTime = endTime;
    rent.cost = cost;
    await rent.save();

    res.status(200).json({ message: 'Bike returned successfully!', cost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
};