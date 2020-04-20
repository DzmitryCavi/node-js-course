const { Schema } = require('mongoose');

const columnSchema = new Schema({
  title: String,
  order: Number
});

columnSchema.methods.toResponse = function toResponse() {
  const { id, title, order } = this;
  return { id, title, order };
};

module.exports = columnSchema;
