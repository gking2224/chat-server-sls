import EnvVariables from './env-variables';

const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

export default async (connectionId, room, author) => {
  const Item = {
    connectionId,
    room,
    author,
  };

  const req = {
    TableName: EnvVariables.ConnectionsTable,
    Item,
  };
  return dynamodb.put(req).promise();
};
