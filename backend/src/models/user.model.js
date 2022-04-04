import mongoose from 'mongoose';

const userSchema =  mongoose.Schema(
  {
    phoneNo: {
      type: Number,
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
const User=mongoose.model('User', userSchema);
export default User;
