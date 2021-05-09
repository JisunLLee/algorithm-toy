const assert = require('assert');
const testMocha = require('../baek-jun/level3');

describe('App test!', function () {
    it("testMocha should return 'TEST!'", function () {
        assert.equal(testMocha.testMocha(), 'TEST!');
    });
});