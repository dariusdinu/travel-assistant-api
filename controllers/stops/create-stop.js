import Stop from '../../models/stop';

async function createStop(req, res) {
  try {
    const stop = new Stop(req.body);
    await stop.save();
    res.status(201).json(stop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export default createStop;
