const { Joi } = require('express-validation');

module.exports = {
  // POST /boards/:boardId
  create: {
    body: Joi.object({
      title: Joi.string().required(),
      columns: Joi.array()
    })
  },
  // GET-PUT-DELETE /boards/:boardId
  getById: {
    params: Joi.object({
      id: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .required()
    })
  },
  // PUT /boards/:boardId
  update: {
    body: Joi.object({
      title: Joi.string(),
      id: Joi.string().regex(/^[-0-9a-zA-Z]{36}$/),
      columns: Joi.array()
    })
  }
};
