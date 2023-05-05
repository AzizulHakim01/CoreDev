import { connect, set } from 'mongoose';

export default function (mongodbURL) {
  return new Promise(function (resolve, reject) {
    // Set mongoose properties
    const mongodbURL = 'mongoDB url should be here'
    set('strictQuery', true);

    // Connect
    connect(mongodbURL, {
      keepAlive: true,
      loggerLevel: 'debug'
    }, function (err) {
      if (err) { reject(err); }
      resolve('Connected to MongoDB');
    });
  });
}
