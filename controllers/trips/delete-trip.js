import Trip from '../../models/trip';
import Stop from '../../models/stop';

async function deleteTrip(req, res) {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    await Stop.deleteMany({ tripId: req.params.id });

    res
      .status(200)
      .json({ message: 'Trip and associated stops deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default deleteTrip;
