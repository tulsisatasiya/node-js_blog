const Joi = require("joi");

// Blog validation

const blogValidation = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author_details: Joi.object().keys({
        name: Joi.string().trim(),
        bio: Joi.string().trim(),
        email: Joi.string().email(),
        social_media: Joi.object().keys({
            twitter: Joi.string(),
            facebook: Joi.string(),
        }),
    }),
});

module.exports = { blogValidation };
