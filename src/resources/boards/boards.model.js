const columnSchema = require('./column.model');
const { Schema, model } = require('mongoose');
const Task = require('../tasks/tasks.model');

const boardSchema = new Schema({
  title: String,
  columns: {
    type: [columnSchema]
  }
});

boardSchema.methods.toResponse = function toResponse() {
  const { id, title, columns } = this;
  return { id, title, columns };
};

boardSchema.post('findOneAndDelete', async board => {
  if (board) await Task.deleteMany({ boardId: board._id.toHexString() });
});

const Board = model('Board', boardSchema);

module.exports = Board;
