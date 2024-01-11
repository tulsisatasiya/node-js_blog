const Joi = require("joi");

// Comment validation
const commentValidation = Joi.object().keys({
    comment: Joi.string().required(),
    blogs: Joi.string().trim().required(), 
   
});

module.exports = { commentValidation };
