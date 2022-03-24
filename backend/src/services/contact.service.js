import Contact from '../models/contact.model.js';

export const createContact = async (userId,_id) => {
    try {
        return Contact.findOneAndUpdate(
            userId,
            {
                $addToSet: { contacts: _id }
            },
            {
                upsert: true, new: true
            }
        ).populate({ path: 'contacts', populate: [{ path: 'userId', select:'email phoneNo' }] })
    } catch (error) {
        next(error)
    }
};