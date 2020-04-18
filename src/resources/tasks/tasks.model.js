const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    title: String,
    order: Number,
    description: String,
    userId: String,
    boardId: String,
    columnId: String
  },
  { versionKey: false }
);

taskSchema.methods.toResponse = function toResponse() {
  const { id, title, order, description, userId, boardId, columnId } = this;
  return { id, title, order, description, userId, boardId, columnId };
};

taskSchema.virtual('id').get(function virtualID() {
  return this._id.toHexString();
});

const Task = model('Task', taskSchema);

module.exports = Task;
