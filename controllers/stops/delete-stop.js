import Stop from '../../models/stop';

async function deleteStop(req, res) {
  try {
    const stop = await Stop.findByIdAndDelete(req.params.id);
    if (!stop) {
      return res.status(404).json({ error: 'Stop not found' });
    }
    res.status(200).json({ message: 'Stop deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export default deleteStop;
