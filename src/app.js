const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/boards.router');
const taskRouter = require('./resources/tasks/tasks.router');
const authRouter = require('./resources/auth/auth.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const { httpLogger, errorLogger, auth } = require('./middlewares');

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(httpLogger);
app.use('/', authRouter);
app.use('/users', auth, userRouter);
app.use('/boards', auth, boardRouter);
app.use('/boards', auth, taskRouter);

app.use(errorLogger);

module.exports = app;
