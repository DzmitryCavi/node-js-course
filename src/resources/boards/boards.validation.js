const { Joi } = require('express-validation');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  // POST /boards/:boardId
  create: {
    body: Joi.object({
      title: Joi.string().required(),
      columns: Joi.array()
        .items(
          Joi.object().keys({
            title: Joi.string().required(),
            order: Joi.number().required()
          })
        )
        .allow(null)
    })
  },
  // GET-PUT-DELETE /boards/:boardId
  getById: {
    params: Joi.object({
      id: Joi.objectId().required()
    })
  },
  // PUT /boards/:boardId
  update: {
    body: Joi.object({
      title: Joi.string(),
      id: Joi.objectId(),
      columns: Joi.array()
        .items(Joi.object())
        .allow(null)
    })
  }
};
