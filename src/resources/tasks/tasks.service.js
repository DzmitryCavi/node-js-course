const Task = require('./tasks.model.js');
const uuid =require('uuid');

const getByBoardId = (req, res) => {
    Task.getByBoardId(req.params.boardId).then(result => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json();
        }
    })
};

const getByTaskIdAndBoardId = (req, res) => {
    Task.getByTaskIdAndBoardId(req.params.boardId, req.params.taskId).then(result => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json();
        } 
    })
};

const create = (req, res) => {
    req.body.id = uuid();
    req.body.boardId = req.params.boardId;
    Task.create(req.body).then(result => {
        res.status(200).json(result);
    })
};

const update = (req, res) => {
    Task.update(req.params.boardId, req.params.taskId, req.body).then(result => {
        res.status(200).json(result);
    })
};

const deleteTaskById = (req, res) => {
    Task.deleteTaskById(req.params.boardId, req.params.taskId).then(result => {
        res.status(200).json(result);
    })
};


module.exports = { getByBoardId, getByTaskIdAndBoardId, update, deleteTaskById, create };