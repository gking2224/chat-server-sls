import getMessages from "../../get-messages";

const we_invoke_get_messages = async (room: string) => {

  const res = await getMessages(room);
  return res;

}

export default ({
  we_invoke_get_messages
})
