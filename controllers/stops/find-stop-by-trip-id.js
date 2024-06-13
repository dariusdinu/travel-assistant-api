import { Stop } from '../../models';

async function findStopsByTripId(req, res) {
  try {
    const { tripId } = req.params;
    const stops = await Stop.find({ tripId });
    res.status(200).json(stops);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default findStopsByTripId;
