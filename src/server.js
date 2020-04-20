const { PORT } = require('./common/config');
const connectToDB = require('./db/db.client');
const app = require('./app');
const logger = require('./common/logger');

async function start() {
  try {
    await connectToDB();
    console.log('conected to DB!');
    const server = app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );

    process.on('uncaughtException', err => {
      logger.error('uncaughtException', {
        massage: `${err.message}\n${err.stack}`
      });
      server.close();
    });
    process.on('unhandledRejection', reason => {
      logger.error('unhandledRejection', {
        massage: `${reason.message}\n${reason.stack}`
      });
      server.close();
    });
  } catch (err) {
    console.error(err);
  }
}

start();

// connectToDB( () => {
//   const server = app.listen(PORT, () =>
//     console.log(`App is running on http://localhost:${PORT}`)
//   );
//   process.on('uncaughtException', err => {
//     logger.error('uncaughtException', {
//       massage: `${err.message}\n${err.stack}`
//     });
//     server.close();
//   });
//   process.on('unhandledRejection', reason => {
//     logger.error('unhandledRejection', {
//       massage: `${reason.message}\n${reason.stack}`
//     });
//     server.close();
//     // throw reason; // Winston caught the exeption and logged it
//   });
// } );
