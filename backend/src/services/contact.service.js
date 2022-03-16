import Contact from '../models/contact.model.js';

export const createContact = async (userId,profileId) => {
    try {
        return Contact.findOneAndUpdate(
            userId,
            {
                $addToSet: { contacts: profileId }
            },
            {
                upsert: true, new: true
            }
        ).populate({ path: 'contacts', populate: [{ path: 'userId', select:'email phoneNo' }] })
    } catch (error) {
        next(error)
    }
};