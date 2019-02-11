const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({
  endpoint: process.env.DYNAMO_DB_ENDPOINT,
});

module.exports = ({
  dynamodb,
});
