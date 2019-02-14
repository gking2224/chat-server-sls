import { expectBody, parseBody } from '../../../tests/assertion-helpers';
import init from './steps/init';
import when from './steps/when';

beforeAll(async () => {
  await init();
});

describe('GET /get-rooms function', () => {
  it('should return the rooms', async () => {
    const res = await when.weInvokeGetRooms({}, {});
    expect(res.statusCode).toEqual(200);
    const body = parseBody(res);
    expect(body.rooms).toBeInstanceOf(Array);
  });
});
