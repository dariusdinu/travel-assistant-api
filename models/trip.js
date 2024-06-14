import mongoose, { Schema } from 'mongoose';

const tripSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    place: { type: String },
    type: { type: String, enum: ['manual', 'generated'], required: true },
    title: { type: String, required: false },
    dateRange: {
      start: { type: Date, required: false },
      end: { type: Date, required: false },
    },
    numberOfStops: { type: Number, default: 0 },
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
    stops: [{ type: Schema.Types.ObjectId, ref: 'Stop' }],
    coverPhoto: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model('Trip', tripSchema);
