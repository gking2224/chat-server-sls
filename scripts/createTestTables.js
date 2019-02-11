#!/usr/bin/env node

const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({
  endpoint: process.env.DYNAMO_DB_ENDPOINT,
});

const roomsTableName = process.env.ROOMS_TABLE || 'test_rooms';

const createTable = async (params) => {
  console.log(`Create table ${params.TableName} at ${process.env.DYNAMO_DB_ENDPOINT}`);
  return dynamodb.createTable(params).promise()
    .then((res) => {
      console.log(`Created '${params.TableName}' table: ${res}`);
      return res;
    })
    .catch((e) => {
      if (e.code === 'Cannot create preexisting table') {
        console.warn(`Table already exists: ${params.TableName}`);
      }
      console.log(e);
    });
};
const createRoomsTable = async () => {
  const params = {
    TableName: roomsTableName,
    AttributeDefinitions: [
      {
        AttributeName: 'room',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'room',
        KeyType: 'HASH',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };
  return createTable(params);
};
createRoomsTable()
  .then((res) => {
    console.log(`Complete: ${res}`);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
