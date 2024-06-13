import Trip from '../../models/trip';

async function updateTrip(req, res) {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default updateTrip;
