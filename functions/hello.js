const AWS = require('aws-sdk');

module.exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello Serverless!',
    AWS,
  }),
});
