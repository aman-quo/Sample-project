import Profile from '../models/profile.model';

//create new profile
export const addProfile = async (body, id) => {
    const profileExist = await Profile.findOne({ userId: id })
    if (profileExist) {
        return 'Profile already exist'
    }else {
        const userData={
            userId:id,
            name:body.name,
            DOB:body.DOB,
            interests:body.interests,
            location:body.location
        }
        return  Profile.create(userData);
    }
};