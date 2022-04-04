import mongoose from 'mongoose';
const profileSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {
      type: String,
      required: true,
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
const Profile = mongoose.model('profiles', profileSchema);
export default Profile;