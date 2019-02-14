export const doFilterByTypeValidation = <T>(validationFunc: (a: any) => T) => (resp: any[]): T[] => {
  const filterFunc = <(x: any) => x is T>((x) => {
    try {
      validationFunc(x);
      return true;
    }
    catch (e) {
      console.warn('Found invalid message in db, filtering out:', x, e);
      return false;
    }
  });
  return resp.filter(filterFunc);
}
