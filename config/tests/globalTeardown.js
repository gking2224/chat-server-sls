
const { dynamodb } = require('./lib');

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
};
module.exports = async () => Promise.all([
  deleteTable(process.env.ROOMS_TABLE),
  deleteTable(process.env.MESSAGES_TABLE),
  deleteTable(process.env.CONNECTIONS_TABLE),
]);
