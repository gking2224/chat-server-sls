
export const expectBody = (res: any) => {
  expect(res).toBeDefined();
  expect(res.body).toBeDefined();
  return expect(JSON.parse(res.body));
}

export const parseBody = (res: any) => {
  expect(res).toBeDefined();
  expect(res.body).toBeDefined();
  return JSON.parse(res.body);
}

export const expectErrorMessage = (res: any) => {
  expect(res).toBeDefined();
  expect(res.body).toBeDefined();
  const body = JSON.parse(res.body);
  expect(body.message).toBeDefined();
  return expect(body.message)
}
