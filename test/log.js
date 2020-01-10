import * as util from '../src/util';
import {expect} from 'chai';

describe('log', function () {
  it('expand map by padding zeroes in between', function () {
    const original = [[1, 2], [3, 4]];
    const expanded = [[1, 0, 0, 0, 2], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [3, 0, 0 , 0, 4]];

    const full_row = original.map(x => [...util.intersperse(x, Array(3).fill(0))]);
    const actual = [...util.intersperse(full_row, Array(3).fill(Array(full_row[0].length).fill(0)))];
    expect(actual).to.eql(expanded);
  });
});
