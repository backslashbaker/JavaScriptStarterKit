import { DerekSet } from '../src/set';

describe('set', () => {
  let set;

  beforeEach(() => {
    set = new DerekSet;
  })

  it('returns an empty list, if given an empty list', () => {
    let list = [];
    expect(set.turnListIntoSet(list)).toEqual([]);
  })

  it('returns the same list it was given, if no duplicates', () => {
    let list = [1, 2, 3, 4, 5];
    expect(set.turnListIntoSet(list)).toEqual(list);
  })

  it('it returns a list, with no duplicates', () => {
    const list = [1, 1];
    const result = [1]
    expect(set.turnListIntoSet(list)).toEqual(result);
  })

  it('loops through a list, to see if there are any duplicate values', () => {
    const list = [1, 2, 3]
    expect(set.doesListContainDuplicates(list)).toBe(false)
  })

  it('loops through a list, to see if there are any duplicate values', () => {
    const list = [1, 2, 2, 3]
    expect(set.doesListContainDuplicates(list)).toBe(true)
  })
  
});
