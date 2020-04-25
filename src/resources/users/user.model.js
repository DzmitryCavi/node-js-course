const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
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

async function hashPassword(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
}

userSchema.pre('save', hashPassword);

const User = model('User', userSchema);

module.exports = User;
