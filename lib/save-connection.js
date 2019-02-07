const AWS = require('aws-sdk');

const TableName = process.env.connections_table;

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = async (connectionId, room, author) => {
  const Item = {
    connectionId,
    room,
    author,
  };

  const req = {
    TableName,
    Item,
  };
  return dynamodb.put(req).promise();
};
