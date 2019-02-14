import getMessages from '../../get-messages';

const weInvokeGetMessages = async (roomName: string) => getMessages(roomName);

export default ({
  weInvokeGetMessages,
});
