import when from './steps/when';
import init from './steps/init';

jest.mock('../lib/env-variables', () => ({
  default: {
    RoomsTable: 'rooms',
    DynamoDbEndpoint: 'http://localhost:8000'
  }
}));

beforeAll(async () => {
  await init();
});

describe('GET /get-rooms functiosn', () => {
  it('should return the rooms', async () => {
    const res = await when.we_invoke_get_rooms();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(JSON.stringify({ rooms: [] }));
  })
})
