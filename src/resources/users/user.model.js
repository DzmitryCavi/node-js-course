const { Schema, model } = require('mongoose');
const Task = require('../tasks/tasks.model');

const userSchema = new Schema(
  {
    name: String,
    login: String,
    password: String
  },
  { versionKey: false }
);

userSchema.methods.toResponse = function toResponse() {
  const { id, name, login } = this;
  return { id, name, login };
};

userSchema.post('findOneAndDelete', async user => {
  if (user) {
    await Task.updateMany({ userId: user._id.toHexString() }, { userId: null });
  }
});

const User = model('User', userSchema);

module.exports = User;
