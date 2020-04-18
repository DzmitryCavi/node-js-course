const { Joi } = require('express-validation');
Joi.objectId = require('joi-objectid')(Joi);
module.exports = {
  // POST /boards/:boardId/tasks
  create: {
    body: Joi.object({
      title: Joi.string().required(),
      order: Joi.number().required(),
      description: Joi.string().required(),
      boardId: Joi.objectId().allow(null),
      userId: Joi.objectId().allow(null),
      columnId: Joi.objectId().allow(null)
    })
  },
  // GET /boards/:boardId/tasks/
  getByBoardId: {
    params: Joi.object({
      boardId: Joi.objectId()
        .allow(null)
        .required()
    })
  },
  // GET-PUT-DELETE /boards/:boardId/tasks/:taskId
  getByTaskIdAndBoardId: {
    params: Joi.object({
      boardId: Joi.objectId()
        .allow(null)
        .required(),
      taskId: Joi.objectId()
    })
  },
  // PUT /boards/:boardId/tasks/:taskId
  update: {
    body: Joi.object({
      id: Joi.objectId(),
      title: Joi.string(),
      order: Joi.number(),
      description: Joi.string(),
      boardId: Joi.objectId().allow(null),
      columnId: Joi.objectId().allow(null),
      userId: Joi.objectId().allow(null)
    })
  }
};
