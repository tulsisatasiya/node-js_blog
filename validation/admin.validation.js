const Joi = require("joi");

//validation
const addadminvalid = {
  body: Joi.object().keys({
    admin_name: Joi.string().trim().required(),
    email: Joi.string().trim().required(), 
    password: Joi.string().trim().required(),
    phone_no: Joi.number().integer().min(1)
  }),
};

module.exports = {addadminvalid};
