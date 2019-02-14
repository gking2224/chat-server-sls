import getMessages from '../../get-messages';

const we_invoke_get_messages = async (roomName: string) => getMessages(roomName);

export default ({
  we_invoke_get_messages,
})
