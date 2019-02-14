import when from './steps/when';

import envVariables from '../../../env-variables';
import { putItems, deleteItems } from '../../../../../tests/data-helper';
import { ChatRoomMessageEntity } from 'chat-types';

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
  const noTranslation = {
    messageId: 'message3',
    message: "Test message - no translation",
    room: 'room3',
    language: 'en',
    author: 'gk',
  };
  const invalidMessage = {
    messageId: 'invalidMessageWithValidPeer',
    room: 'invalidMessageRoom'
  };
  const validMessage = {
    messageId: 'validMessageWithInvalidPeer',
    message: "Some message",
    room: 'invalidMessageRoom',
    language: 'en',
    author: 'gk'
  };
  const allData = [positiveMatch, negativeMatch, noTranslation, invalidMessage, validMessage];
  beforeAll(async () => {
    return putItems(envVariables.MessagesTable, allData, false)
  });
  afterAll(async () => {
    return deleteItems(envVariables.MessagesTable, 'messageId', allData.map(i => i.messageId));
  });
  it('should return the messages for the given room', async () => {
    const messages = await when.we_invoke_get_messages(room);
    expect(messages).toEqual([positiveMatch]);
  })
  it('should fail validation if invalid message in db', async () => {
    const messages = await when.we_invoke_get_messages("invalidMessageRoom")
    expect(messages.length).toBe(1);
  })
})
