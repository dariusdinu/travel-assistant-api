import { Trip } from '../../models';

async function createTrip(req, res) {
  try {
    const {
      userId,
      type,
      leaveDate,
      numberOfStops,
      popularAttractions,
      trendingRestaurants,
      entertainmentPlaces,
      coffeeShops,
      shoppingCenters,
      parks,
      specialRequirements,
      willingToTravelFurther,
    } = req.body;

    const trip = new Trip({
      userId,
      type,
      leaveDate,
      numberOfStops,
      popularAttractions,
      trendingRestaurants,
      entertainmentPlaces,
      coffeeShops,
      shoppingCenters,
      parks,
      specialRequirements,
      willingToTravelFurther,
      stops: [],
    });

    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default createTrip;
