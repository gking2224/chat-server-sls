import * as AWS from 'aws-sdk';
import * as awscred from 'awscred';
import { Credentials } from 'aws-sdk';

let initialized = false;

export default async () => {

  if (initialized) return;

  // process.env.messages_table = 'messages.v2';
  // process.env.connections_table = 'connections';
  // process.env.rooms_table = 'rooms';

  // const awsConfig = await new Promise((res, rej) => {
  //   awscred.loadCredentialsAndRegion({}, (err, data) => {
  //     console.log('got credentials and region', data);
  //     if (err) rej(err);
  //     else res(data);
  //   })
  // }) as any;
  // process.env.AWS_REGION = awsConfig.region;
  // process.env.SERVERLESS_REGION = awsConfig.region;
  // process.env.AWS_ACCESS_KEY = awsConfig.credentials.accessKeyId;
  // process.env.AWS_SECRET_ACCESS_KEY = awsConfig.credentials.secretKey;

  if (!AWS.config.region) {
    console.log(AWS.config.update);
    // AWS.config.update({
    //   region: awsConfig.region,
    //   credentials: new Credentials(awsConfig.credentials.accessKeyId, awsConfig.credentials.secretKey),
    // });
  }
  initialized = true;
}
