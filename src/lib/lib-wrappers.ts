import { DynamoDB } from 'aws-sdk';
import EnvVariables from './env-variables';

export const dynamodb = new DynamoDB.DocumentClient({
  service: new DynamoDB({
    endpoint: EnvVariables.DynamoDbEndpoint,
  }),
});
