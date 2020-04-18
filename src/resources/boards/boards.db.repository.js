const Board = require('./boards.model');

const getAll = async () => await Board.find({});

const getById = async id => await Board.findById(id);

const create = async data => await Board(data).save();

const update = async (id, data) => {
  const board = await Board.findById(id);
  if (!board) return null;
  for (const key in data) {
    if (key === 'columns') continue;
    board[key] = data[key];
  }
  return board.save();
};

const deleteById = async id => await Board.findOneAndDelete({ _id: id });

module.exports = { getAll, getById, update, deleteById, create };
