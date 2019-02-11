import when from './steps/when';
import init from './steps/init';

import envVariables from '../env-variables';
import { putItems, deleteItems } from '../../../tests/data-helper';

beforeAll(async () => {
  await init();
});

jest.setTimeout(10000);

describe('get-messages', () => {
  const room = 'testRoom';
  const positiveMatch = {
    messageId: 'message1',
    message: "Test message - positive",
    room,
  };
  const negativeMatch = {
    messageId: 'message2',
    message: "Test message - negative",
    room: 'anotherRoom',
  };
  beforeAll(async () => {
    return putItems(envVariables.MessagesTable, [positiveMatch, negativeMatch])
  });
  afterAll(async () => {
    return deleteItems(envVariables.MessagesTable, 'messageId', [positiveMatch, negativeMatch].map(i => i.messageId));
  });
  it('should return the messages for the given room', async () => {
    const messages = await when.we_invoke_get_messages(room);
    expect(messages).toEqual([positiveMatch]);
  })
})