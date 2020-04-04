let usersData = require('../../data/data').users;
const { unassignUser } = require('../tasks/tasks.memory.repository');

const getAll = async () => {
  return usersData;
};

const getById = async id => { 
  return usersData.find(user => user.id === id);
};

const create = async data => {
  usersData.push(data);
  return data;
};

const update = async (id, data) => {
  let updatedData ={};
  usersData = usersData.map(user => {
    if(user.id === id){
      updatedData = {...user, ...data};
      user = updatedData;
    }
    return user;
  })
  return updatedData;
};

const deleteById = async id => {
  let isDeleted = false;
  usersData = usersData.filter(user => {
    if(user.id !== id){
      return true;
    }
    isDeleted = true;
    return false;
  })
  unassignUser(id);
  return isDeleted;
};

module.exports = { getAll, getById, update, deleteById, create };
