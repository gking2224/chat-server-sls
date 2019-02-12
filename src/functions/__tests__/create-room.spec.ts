import when from './steps/when';
import init from './steps/init';
import { expectErrorMessage } from '../../../tests/assertion-helpers';

beforeAll(async () => {
  await init();
});

describe('POST /create-room function', () => {
  it('should create a room', async () => {
    const event = { body: JSON.stringify({ room: 'testCreateRoom' }) };
    const res = await when.we_invoke_create_room(event);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(JSON.stringify({ room: "testCreateRoom" }));
  })
  it('should handle invalid room type', async () => {
    const event = { body: JSON.stringify({ room: 2 }) };
    const res = await when.we_invoke_create_room(event);
    expect(res.statusCode).toEqual(500);
    expectErrorMessage(res).toEqual('Expected string, but was number');
  })
  it('should handle invalid input - no room', async () => {
    const event = { body: JSON.stringify({}) };
    const res = await when.we_invoke_create_room(event);
    expect(res.statusCode).toEqual(500);
    expectErrorMessage(res).toEqual('Expected string, but was undefined');
  })
})
