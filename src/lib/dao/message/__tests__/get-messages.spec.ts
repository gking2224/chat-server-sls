import when from './steps/when';

import { ChatRoomMessageEntity } from '@animando/chat-types';
import { deleteItems, putItems } from '../../../../../tests/data-helper';
import envVariables from '../../../env-variables';

describe('get-messages', () => {
  const room = 'testRoom';
  const positiveMatch: ChatRoomMessageEntity = {
    author: 'gk',
    language: 'en',
    message: 'Test message - positive',
    messageId: 'message1',
    room,
    timestamp: 1,
    translation: null,
  };
  const negativeMatch: ChatRoomMessageEntity = {
    author: 'gk',
    language: 'en',
    message: 'Test message - negative',
    messageId: 'message2',
    room: 'anotherRoom',
    timestamp: 1,
    translation: null,
  };
  const noTranslation = {
    author: 'gk',
    language: 'en',
    message: 'Test message - no translation',
    messageId: 'message3',
    room: 'room3',
  };
  const noTimestamp = {
    author: 'gk',
    language: 'en',
    message: 'Test message - no timestamp',
    messageId: 'noTimestamp',
    room: 'noTimestamp',
  };
  const invalidMessage = {
    messageId: 'invalidMessageWithValidPeer',
    room: 'invalidMessageRoom',
  };
  const validMessage = {
    author: 'gk',
    language: 'en',
    message: 'Some message',
    messageId: 'validMessageWithInvalidPeer',
    room: 'invalidMessageRoom',
  };
  const allData = [positiveMatch, negativeMatch, noTranslation, invalidMessage, validMessage, noTimestamp];

  beforeAll(async () => {
    return putItems(envVariables.MessagesTable, allData, false);
  });

  afterAll(async () => {
    return deleteItems(envVariables.MessagesTable, 'messageId', allData.map((i) => i.messageId));
  });

  it('should return the messages for the given room', async () => {
    const messages = await when.weInvokeGetMessages(room);
    expect(messages).toEqual([positiveMatch]);
  });
  it('should fail validation if invalid message in db', async () => {
    const messages = await when.weInvokeGetMessages('invalidMessageRoom');
    expect(messages.length).toBe(1);
  });
  it('should fail write default timestamp', async () => {
    const messages = await when.weInvokeGetMessages('noTimestamp');
    expect(messages.length).toBe(1);
    expect(messages[0].timestamp).toBe(-1);
  });
});
