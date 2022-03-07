import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    phoneNo: {
      type: Number,
      unique:true
    },
    email: {
      type: String,
      unique:true
    },
    password: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
