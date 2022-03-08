import HttpStatus from 'http-status-codes';
import * as ProfileServices from '../services/profile.service'

/**
 * Controller to create a new profile
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addProfile = async (req, res, next) => {
    try {
      const data = await ProfileServices.addProfile(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Profile created successfully'
      });
    } catch (error) {
      next(error);
    }
  };