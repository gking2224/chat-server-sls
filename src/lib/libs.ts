import EnvVariables from './env-variables';
import { DynamoDB } from 'aws-sdk';

export const dynamodb = new DynamoDB.DocumentClient({
  service: new DynamoDB({
    endpoint: EnvVariables.DynamoDbEndpoint
  })
});
