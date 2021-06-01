const tail = require('../tail');
const assert = require('chai').assert;


const words = ["Yo Yo", "Lighthouse", "Labs"];


describe("#tail test", () => {
  it("returns['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});