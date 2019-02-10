const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({
  endpoint: 'http://localhost:8000'
});

const createTable = async (params) => {
  await dynamodb.createTable(params).promise()
    .then(() => console.log(`Created '${params.TableName}' table`))
    .catch((e) => {
      if (e.code === 'Cannot create preexisting table') {
        console.warn(`Table already exists: ${params.TableName}`);
      }
    })
}
const createRoomsTable = async () => {
  const params = {
    TableName: 'rooms',
    AttributeDefinitions: [
      {
        AttributeName: 'room',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'room',
        KeyType: 'HASH'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    }
  };
  await createTable(params);
}
module.exports = async () => {
  return createRoomsTable();
}
