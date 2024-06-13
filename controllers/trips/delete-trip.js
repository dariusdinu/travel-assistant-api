import Trip from '../../models/trip';

async function deleteTrip(req, res) {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    res.status(200).json({ message: 'Trip deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default deleteTrip;
