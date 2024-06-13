import mongoose, { Schema } from 'mongoose';

const stopSchema = new Schema(
  {
    place: {
      type: String,
      required: true,
    },
    address: { type: String, required: true },
    arrivalTime: { type: Date, required: true },
    website: {
      type: String,
      validate: {
        validator: (value) => /^https?:\/\/.*$/.test(value),
        message: (props) => `${props.value} is not a valid URL`,
      },
    },
    notes: { type: String },
    images: [String],
    additionalFiles: [String],
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Stop', stopSchema);
export { stopSchema };
