import mongoose from 'mongoose';

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true
    },
    DOB: {
      type: String,
      required: true,

    },
    interests: {
      type: String,
      required: true,

    },
    location: {
      type: String,
      required: true,

    }
  },
  {
    timestamps: true
  }
);
const Profile = mongoose.model('Profile', profileSchema);
export default Profile;