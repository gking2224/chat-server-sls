import when from './steps/when';
import init from './steps/init';

import envVariables from '../env-variables';
import { putItems, deleteItems } from '../../../tests/data-helper';

beforeAll(async () => {
  await init();
});

jest.setTimeout(10000);

describe('get-connections-by-room', () => {
  const room = 'testRoom';
  const positiveMatch = {
    connectionId: 'connectionId1',
    room,
  };
  const negativeMatch = {
    connectionId: 'connectionId2',
    room: 'anotherRoom',
  };
  beforeAll(async () => {
    return putItems(envVariables.ConnectionsTable, [positiveMatch, negativeMatch])
  });
  afterAll(async () => {
    return deleteItems(envVariables.ConnectionsTable, 'connectionId', [positiveMatch, negativeMatch].map(i => i.connectionId));
  });
  it('should return the connections for the given room', async () => {
    const connections = await when.we_invoke_get_connections_by_room(room);
    expect(connections).toEqual([positiveMatch]);
  })
})
