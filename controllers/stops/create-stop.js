import { Stop, Trip } from '../../models';

async function createStop(req, res) {
  try {
    const {
      place,
      address,
      arrivalTime,
      website,
      notes,
      images,
      additionalFiles,
      isWheelchairAccessible,
      isKidFriendly,
      tripId,
    } = req.body;

    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(400).json({ error: 'Invalid tripId' });
    }

    const stop = new Stop({
      place,
      address,
      arrivalTime,
      website,
      notes,
      images,
      additionalFiles,
      isWheelchairAccessible,
      isKidFriendly,
      tripId,
    });

    await stop.save();

    trip.stops.push(stop._id);
    trip.numberOfStops += 1;
    await trip.save();

    res.status(201).json(stop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default createStop;
