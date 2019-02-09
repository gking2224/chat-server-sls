import AWS = require('aws-sdk');
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export default async (room) => { // eslint-disable-line no-unused-vars
  const req: DocumentClient.ScanInput = {
    TableName: EnvVariables.MessagesTable,
    Limit: 10,
  };
  const resp = await dynamodb.scan(req).promise();
  return resp.Items;
};
