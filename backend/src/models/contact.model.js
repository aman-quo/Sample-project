import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
   contacts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profiles'
   }]
});

const Contact = mongoose.model("contacts", contactSchema)
export default Contact;