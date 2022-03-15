import Profile from '../models/profile.model';

//create new profile
export const addProfile = async (body, id) => {
    const profileExist = await Profile.findOne({ userId: id })
    const data = await Profile.create(body);
    return data;
};