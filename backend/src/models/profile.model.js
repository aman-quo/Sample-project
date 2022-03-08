import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    DOB: {
      type: String,
    },
    interests: {
      type: String,
    },
    location: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

export default model('Profile', userSchema);