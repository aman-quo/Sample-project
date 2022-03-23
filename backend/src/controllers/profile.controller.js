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
    const id = req.user.id;
    const data = await ProfileServices.addProfile(req.body, id);
    if (data === 'Profile already exist') {
     return res.status(HttpStatus.CONFLICT).json({
        code: HttpStatus.CONFLICT,
        message: 'Profile already exist',
        data:data
      })
    }
    return res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Profile created successfully'
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};