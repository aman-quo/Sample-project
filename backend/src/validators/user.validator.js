import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    phoneNo: Joi.number()
      .required(),
    email: Joi.string()
      .pattern(
        new RegExp(
          /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/
        )
      )
      .required(),
    password: Joi.string()
      .pattern(
        new RegExp(
          /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
        )
      )
      .required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .required(),
    password: Joi.string()
      .required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
