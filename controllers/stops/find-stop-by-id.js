import Stop from '../../models/stop';
async function findStopById(req, res) {
  try {
    const stop = await Stop.findById(req.params.id);
    if (!stop) {
      return res.status(404).json({ error: 'Stop not found' });
    }
    res.status(200).json(stop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export default findStopById;
