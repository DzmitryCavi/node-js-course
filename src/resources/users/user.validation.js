const { Joi } = require('express-validation');

module.exports = {
  // POST /users
  create: {
    body: Joi.object({
      name: Joi.string().required(),
      login: Joi.string().required(),
      password: Joi.string().required()
    })
  },
  // GET-PUT-DELETE /users/:userId
  getById: {
    params: Joi.object({
      id: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .required()
    })
  },
  // PUT /users/:taskId
  update: {
    body: Joi.object({
      name: Joi.string(),
      login: Joi.string(),
      password: Joi.string(),
      id: Joi.string()
    })
  }
};
