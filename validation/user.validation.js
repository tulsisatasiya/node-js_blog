const Joi = require("joi");


//user validation

const userValidation = {
    body: Joi.object().keys({
        profile_picture: Joi.string(),
        f_Name: Joi.string().trim().required(),
        l_Name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        password: Joi.string().trim().required(),
        age: Joi.number().integer().min(18).required(),
        phone_no: Joi.string().trim().required(),
        address: Joi.object().keys({
            street: Joi.string().trim(),
            city: Joi.string().trim(),
            state: Joi.string().trim(),
            zipCode: Joi.string().trim(),
        }),
        admin:Joi.string().trim().required(),
        blogs:Joi.string().trim().required()
    }),
};

module.exports = {userValidation};