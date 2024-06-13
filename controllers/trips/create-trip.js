import { Trip } from '../../models';

// Create a new trip
async function createTrip(req, res) {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default createTrip;
