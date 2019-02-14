import { CreateRoomBody, validateCreateRoomResponse } from 'chat-types';
import { expectErrorMessage } from '../../../tests/assertion-helpers';
import init from './steps/init';
import when from './steps/when';

beforeAll(async () => {
  await init();
});

describe('POST /create-room function', () => {
  it('should create a room', async () => {
    const reqBody: CreateRoomBody = {
      roomName: 'testCreateRoom',
    };
    const event = { body: JSON.stringify(reqBody) };
    const res = await when.we_invoke_create_room(event);
    expect(res.statusCode).toEqual(200);
    const resBody = validateCreateRoomResponse(JSON.parse(res.body));
    expect(resBody.roomName).toEqual('testCreateRoom');
  });
  it('should create a room, ignoring additional properties', async () => {
    const reqBody = {
      roomName: 'testCreateRoom2',
      someOther: 'x',
    };
    const event = { body: JSON.stringify(reqBody) };
    const res = await when.we_invoke_create_room(event);
    expect(res.statusCode).toEqual(200);
    const resBody = validateCreateRoomResponse(JSON.parse(res.body));
    expect(resBody.roomName).toEqual('testCreateRoom2');
  });
  it('should handle invalid room type', async () => {
    const event = { body: JSON.stringify({ roomName: 2 }) };
    const res = await when.we_invoke_create_room(event);
    expect(res.statusCode).toEqual(500);
    expectErrorMessage(res).toEqual('Expected string, but was number');
  });
  it('should handle invalid input - no room', async () => {
    const event = { body: JSON.stringify({}) };
    const res = await when.we_invoke_create_room(event);
    expect(res.statusCode).toEqual(500);
    expectErrorMessage(res).toEqual('Expected string, but was undefined');
  });
});
