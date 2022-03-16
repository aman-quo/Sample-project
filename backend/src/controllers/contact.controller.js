import HttpStatus from 'http-status-codes';
import * as service from '../services/contact.service.js'

export const createContact = async (req, res) => {
    try {
        const input = await service.createContact(req.user.id, req.params.profileId)
        res.status(HttpStatus.CREATED).json({
            message: 'Contact created succesfully',
            data:input
        })
    } catch (error) {
        res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error, message: error.message || "Error occured in controller", });
    }
};
