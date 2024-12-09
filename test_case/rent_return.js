// written by: Piseth San

const request = require('supertest');
const app = require('../server');

describe('Bike Rental System', () => {
  let rentId;

  it('should rent a bike successfully', async () => {
    const response = await request(app)
      .post('/api/rent-bike')
      .send({
        bikeId: 7,
        stationId: 0,
        userId: 1,
        cardNumber: '4111111111111111',
        cardExpiry: '12/24',
        cardCVC: '123',
        destination: 'Park',
        phoneNumber: '1234567890'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Bike rented successfully!');
    rentId = response.body.rentId;
  });

  it('should return a bike successfully', async () => {
    const response = await request(app)
      .post('/api/return-bike')
      .send({
        bikeId: 7,
        stationId: 0,
        userId: 1
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Bike returned successfully!');
  });
});