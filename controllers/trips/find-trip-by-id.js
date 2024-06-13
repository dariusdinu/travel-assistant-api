import Trip from '../../models/trip';

async function findTripById(req, res) {
  try {
    const trip = await Trip.findById(req.params.id).populate('stops');
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default findTripById;
