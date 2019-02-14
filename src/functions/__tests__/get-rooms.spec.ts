import { expectBody, parseBody } from '../../../tests/assertion-helpers';
import init from './steps/init';
import when from './steps/when';

beforeAll(async () => {
  await init();
});

describe('GET /get-rooms function', () => {
  it('should return the rooms', async () => {
    const res = await when.we_invoke_get_rooms({}, {});
    expect(res.statusCode).toEqual(200);
    const body = parseBody(res);
    expect(body.rooms).toBeInstanceOf(Array);
  });
});
