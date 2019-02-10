
const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({
  endpoint: 'http://localhost:8000'
});

const deleteTable = async (tableName) => {

  const params = {
    TableName: tableName,
  };
  return dynamodb.deleteTable(params).promise()
    .then(() => console.log(`Deleted table: ${tableName}`))
    .catch((e) => {
      if (!e.code === 'ResourceNotFoundException') {
        throw e;
      } else {
        console.log(`Could not delete table, does not exist: ${tableName}`);
      }
    });
}
module.exports = async () => {
  await deleteTable('rooms');
}
