import when from './steps/when';

import { ConnectionEntity } from 'chat-types';
import { deleteItems, putItems } from '../../../../../tests/data-helper';
import envVariables from '../../../env-variables';

describe('get-connections-by-room', () => {
  const room = 'testRoom';
  const positiveMatch = {
    author: 'gk',
    connectionId: 'connectionId1',
    room,
  };
  const negativeMatch: ConnectionEntity = {
    author: 'gk',
    connectionId: 'connectionId2',
    room: 'anotherRoom',
  };
  const invalidMatch = {
    connectionId: 'invalidConnection',
    room,
  };
  const allItems = [positiveMatch, negativeMatch, invalidMatch];
  beforeAll(async () => {
    return putItems(envVariables.ConnectionsTable, allItems, false);
  });
  afterAll(async () => {
    return deleteItems(envVariables.ConnectionsTable, 'connectionId', allItems.map((i) => i.connectionId));
  });
  it('should return the connections for the given room, excluding invalid', async () => {
    const connections = await when.weInvokeGetConnectionsByRoom(room);
    expect(connections).toEqual([positiveMatch]);
  });
});
