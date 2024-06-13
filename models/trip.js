import mongoose, { Schema } from 'mongoose';
import { stopSchema } from './stop';

const tripSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['manual', 'generated'], required: true },
    leaveDate: { type: Date, required: true },
    numberOfStops: { type: Number, default: 0 }, // Default value for number of stops
    popularAttractions: { type: Boolean, default: false },
    trendingRestaurants: { type: Boolean, default: false },
    entertainmentPlaces: { type: Boolean, default: false },
    coffeeShops: { type: Boolean, default: false },
    shoppingCenters: { type: Boolean, default: false },
    parks: { type: Boolean, default: false },
    specialRequirements: {
      wheelchairAccessible: { type: Boolean, default: false },
      kidFriendly: { type: Boolean, default: false },
    },
    willingToTravelFurther: { type: Boolean, default: false },
    stops: [stopSchema],
  },
  { timestamps: true }
);

export default mongoose.model('Trip', tripSchema);
