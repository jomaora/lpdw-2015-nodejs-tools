const should = require('chai').should();     // calling function
const geometry = require('../lib/geometry');

describe('Geometry library', () => {
    describe('#triangle area', () => {
        it('should return 10 when base is 5 and height is 4', () => {
            var area = geometry.triangleArea(5, 4);
            area.should.be.a('number');
            area.should.equal(10);
        });
    });
});