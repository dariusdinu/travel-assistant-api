import mongoose, { Schema } from 'mongoose';

const stopSchema = new Schema(
  {
    place: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return /^https:\/\/www\.google\.com\/maps\/.*$/.test(value); // Simple regex to check if it's a Google Maps link
        },
        message: (props) => `${props.value} is not a valid Google Maps link`,
      },
    },
    address: { type: String, required: true },
    arrivalTime: { type: Date, required: true },
    website: {
      type: String,
      validate: {
        validator: (value) => {
          return /^https?:\/\/.*$/.test(value); // Simple regex to check if it's a valid URL
        },
        message: (props) => `${props.value} is not a valid URL`,
      },
    },
    notes: { type: String },
    images: [String],
    additionalFiles: [String],
  },
  { timestamps: true }
);

export default mongoose.model('Stop', stopSchema);
export { stopSchema };
