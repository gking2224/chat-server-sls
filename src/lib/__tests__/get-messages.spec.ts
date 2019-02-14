import when from './steps/when';
import init from './steps/init';

import envVariables from '../env-variables';
import { putItems, deleteItems } from '../../../tests/data-helper';
import { ChatRoomMessageEntity } from 'chat-types';

beforeAll(async () => {
  await init();
});

jest.setTimeout(10000);

describe('get-messages', () => {
  const room = 'testRoom';
  const positiveMatch: ChatRoomMessageEntity = {
    messageId: 'message1',
    message: "Test message - positive",
    room,
    language: 'en',
    author: 'gk',
    translation: null
  };
  const negativeMatch: ChatRoomMessageEntity = {
    messageId: 'message2',
    message: "Test message - negative",
    room: 'anotherRoom',
    language: 'en',
    author: 'gk',
    translation: null
  };
  beforeAll(async () => {
    return putItems(envVariables.MessagesTable, [positiveMatch, negativeMatch], false)
  });
  afterAll(async () => {
    return deleteItems(envVariables.MessagesTable, 'messageId', [positiveMatch, negativeMatch].map(i => i.messageId));
  });
  it('should return the messages for the given room', async () => {
    const messages = await when.we_invoke_get_messages(room);
    expect(messages).toEqual([positiveMatch]);
  })
})
