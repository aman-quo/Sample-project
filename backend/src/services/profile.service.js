import Profile from '../models/profile.model';

//create new profile
export const addProfile = async (body) => {
    const data = await Profile.create(body);
    return data;
};