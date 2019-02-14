import when from './steps/when';

import envVariables from '../../../env-variables';
import { putItems, deleteItems } from '../../../../../tests/data-helper';
import { ConnectionEntity } from 'chat-types';

describe('get-connections-by-room', () => {
  const room = 'testRoom';
  const positiveMatch = {
    connectionId: 'connectionId1',
    room,
    author: 'gk'
  };
  const negativeMatch: ConnectionEntity = {
    connectionId: 'connectionId2',
    room: 'anotherRoom',
    author: 'gk',
  };
  const invalidMatch = {
    connectionId: 'invalidConnection',
    room
  };
  const allItems = [positiveMatch, negativeMatch, invalidMatch];
  beforeAll(async () => {
    return putItems(envVariables.ConnectionsTable, allItems, false);
  });
  afterAll(async () => {
    return deleteItems(envVariables.ConnectionsTable, 'connectionId', allItems.map(i => i.connectionId));
  });
  it('should return the connections for the given room, excluding invalid', async () => {
    const connections = await when.we_invoke_get_connections_by_room(room);
    expect(connections).toEqual([positiveMatch]);
  })
})
