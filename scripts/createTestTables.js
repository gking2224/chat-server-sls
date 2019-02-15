#!/usr/bin/env node
const { dynamodb } = require('../config/lib');
const { roomsSpec, messagesSpec, connectionsSpec } = require('../config/table-specs');

const createTable = async (params) => {
  console.log(dynamodb.endpoint);
  return dynamodb.createTable(params).promise()
    .then(() => console.log(`Created '${params.TableName}' table`))
    .catch((e) => {
      if (e.code === 'ResourceInUseException') {
        console.warn(`Table already exists: ${params.TableName}`);
      } else {
        throw e;
      }
    });
};
const createRoomsTable = async () => createTable(roomsSpec);
const createMessagesTable = async () => createTable(messagesSpec);
const createConnectionsTable = async () => createTable(connectionsSpec);

const doCreate = async () => Promise.all([
  createMessagesTable(),
  createRoomsTable(),
  createConnectionsTable(),
]);

doCreate()
  .then(() => {
    console.log('Complete');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
