
const { dynamodb } = require('./lib');

const createTable = async (params) => {
  await dynamodb.createTable(params).promise()
    .then(() => console.log(`Created '${params.TableName}' table`))
    .catch((e) => {
      if (e.code === 'ResourceInUseException') {
        console.warn(`Table already exists: ${params.TableName}`);
      } else {
        throw e;
      }
    });
};
const createRoomsTable = async () => {
  const params = {
    TableName: process.env.ROOMS_TABLE,
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
  await createTable(params);
};
module.exports = async () => createRoomsTable();
