import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: { type: String, required: true }, // String is shorthand for {type: String}
    lastName: { type: String, required: true },
    emailAddress: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        },
      },
      message: (props) => `${props.value} is not valid`,
    },
    password: {
      type: String,
      min: 8,
      validate: {
        validator: (value) => {
          // uppercase, number, symbol
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
            value
          );
        },
      },
    },
    birthDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
