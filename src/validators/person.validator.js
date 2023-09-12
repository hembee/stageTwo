const Joi = require("joi");

const personValidator = Joi.object({
  name: Joi.string().required(),
});

module.exports = personValidator;
