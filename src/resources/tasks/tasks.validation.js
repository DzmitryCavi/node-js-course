const { Joi } = require('express-validation');

module.exports = {
  // POST /boards/:boardId/tasks
  create: {
    body: Joi.object({
      title: Joi.string().required(),
      order: Joi.number().required(),
      description: Joi.string().required(),
      boardId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .allow(null),
      userId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .allow(null),
      columnId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .allow(null)
    })
  },
  // GET /boards/:boardId/tasks/
  getByBoardId: {
    params: Joi.object({
      boardId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .required()
    })
  },
  // GET-PUT-DELETE /boards/:boardId/tasks/:taskId
  getByTaskIdAndBoardId: {
    params: Joi.object({
      boardId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .required(),
      taskId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .required()
    })
  },
  // PUT /boards/:boardId/tasks/:taskId
  update: {
    body: Joi.object({
      id: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .allow(null),
      title: Joi.string(),
      order: Joi.number(),
      description: Joi.string(),
      boardId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .allow(null),
      columnId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .allow(null),
      userId: Joi.string()
        .regex(/^[-0-9a-zA-Z]{36}$/)
        .allow(null)
    })
  }
};
