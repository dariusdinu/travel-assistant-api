import Trip from '../../models/trip';

async function findAllTrips(req, res) {
  try {
    const trips = await Trip.find().populate('stops');
    res.status(200).json(trips);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default findAllTrips;
