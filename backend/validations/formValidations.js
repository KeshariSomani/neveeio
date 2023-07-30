const Joi = require('joi')


exports.rentalFormValidation = (data) => {
    const schema = Joi.object({
      name:Joi.string().required(),
      email:Joi.string().required(),
      phone:Joi.string().max(10).min(10).required(),
      date:Joi.string().required(),
      time:Joi.string().required()
    });
    return schema.validate(data);
  };
exports.telemeticsFormValidation = (data) =>
{
  const schema = Joi.object({
      name:Joi.string().required(),
      email:Joi.string().required(),
      phone:Joi.string().max(10).min(10).required(),
      date:Joi.string().required(),
      time:Joi.string().required()
  });
  return schema.validate(data);
}
exports.franchiseFormValidation = (data) =>
{
  const schema = Joi.object({
      name:Joi.string().required(),
      email:Joi.string().required(),
      phone:Joi.string().max(10).min(10).required(),
      date:Joi.string().required(),
      time:Joi.string().required(),
      city:Joi.string().required(),
      current_bussiness:Joi.string().required(),
      starting_scooters:Joi.string().required(),
      message:Joi.string()
  });
  return schema.validate(data);
}

exports.thirdpartyFormValidation = (data) => {
  const schema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    phone:Joi.string().max(10).min(10).required(),
    date:Joi.string().required(),
    time:Joi.string().required()
  });
  return schema.validate(data);
};

exports.quickenquiryFormValidation = (data) => {
  const schema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    phone:Joi.string().max(10).min(10).required(),
    whatsapp_number:Joi.string().required().max(10).min(10).required(),
    location:Joi.string().required(),
    message:Joi.string().required()
  });
  return schema.validate(data);
};