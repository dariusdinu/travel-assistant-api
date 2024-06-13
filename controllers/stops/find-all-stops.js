import Stop from '../../models/stop';

async function findAllStops(req, res) {
  try {
    const stops = await Stop.find();
    res.status(200).json(stops);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default findAllStops;
