import Stop from '../../models/stop';

async function updateStop(req, res) {
  try {
    const stop = await Stop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!stop) {
      return res.status(404).json({ error: 'Stop not found' });
    }
    res.status(200).json(stop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export default updateStop;
