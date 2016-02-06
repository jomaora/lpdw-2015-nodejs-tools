const expect = require('chai').expect;
const equation = require('../lib/second-degree');

describe('Second degree library', () => {
    it('should expose resolve function', () => {
        expect(equation).to.have.property('resolve');
        expect(equation.resolve).to.be.a('function');
    });

    describe('while using resolve function', () => {
        it('should return an array with 1 and -4 as solution for x^2 + 3x - 4 = 0', () => {
            const solution = equation.resolve(1, 3, -4);
            expect(solution).to.be.an('array');
            expect(solution.length).to.be.equal(2);

            expect(solution[0]).to.be.equal(1);
            expect(solution[1]).to.be.equal(-4);
        });

        it('should throw error for x^2 + 1 = 0', () => {
            expect(equation.resolve.bind(equation, 1, 0, 1)).to.throw(Error);

            /* OR
            try {
                equation.resolve(1, 0, 1);
            }
            catch (err) {
                expect(err).to.be.instanceof(Error);
            }
            */
        });
    });
});