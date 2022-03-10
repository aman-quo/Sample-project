import Profile from '../models/profile.model';

//search interests
export const searchInterest = async (interest) => {
    const data = await Profile.find({
        $or: [{ interests: { $regex: interest.toString(), $options: 'i' } }],
    });
    if (data) {
        return data;
    } else {
        return 'Interests not found';
    }
};