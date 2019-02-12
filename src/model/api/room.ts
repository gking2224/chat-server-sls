import * as Runtypes from 'runtypes';

export const CreateRoomBodyValidationType = Runtypes.Record({
  room: Runtypes.String
});

export type CreateRoomBody = Runtypes.Static<typeof CreateRoomBodyValidationType>;

export const validateCreateRoomBody = (body: any): CreateRoomBody => {
  return CreateRoomBodyValidationType.check(body) as CreateRoomBody;
}
