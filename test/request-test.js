var supertest  = require("supertest");
var request = supertest.agent("http://localhost:3000");
var should = require('chai').should();

describe('Songs API', function() {
    before(function(done) {
        request
            .post('/login')
            .set('X-Requested-With', 'XMLHttpRequest')
            .send({username: 'titi', password:  'titi'})
            .expect('Location','/songs')
            .end(done)
        ;
    });

    it('when request /songs should return a 200 status code', function(done) {
        request.get('/songs')
            .end(function(err, res) {
                should.not.exist(err);
                res.should.have.property('status', 200);
                done();
            });
        ;
    });

    after(function(done) {
        request
            .get('/logout')
            .expect('Location','/login')
            .end(done)
        ;
    });
});