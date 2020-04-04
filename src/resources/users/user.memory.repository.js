let usersData = require('../../data/data').users;
console.log(usersData);

const getAll = async () => {
  return usersData;
};

module.exports = { getAll };
