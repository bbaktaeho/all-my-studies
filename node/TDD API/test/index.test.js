const app = require('../index');
const supertest = require('supertest');
const should = require('should');

/**
 * @function should.have.property(key,value) key 로 찾은 프로퍼티와 벨류를 확인
 */

describe('GET /users 는', () => {
    describe('성공시', () => {
        it('유저 객체를 담은 배열로 응답한다', (done) => {
            supertest(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });
        it('최대 limit 갯수만큼 응답한다', (done) => {
            supertest(app)
                .get('/users?limit=2')
                .end((err, res) => {
                    res.body.should.have.lengthOf(2);
                    done();
                });
        });
    });
    describe('실패시', () => {
        it('limit이 숫자형이 아니면 400을 응답한다', (done) => {
            // expect 는 상태코드를 검사할 수 있음
            supertest(app).get('/users?limit=fd').expect(400).end(done);
        });
    });
});

describe('GET /users/1 는', () => {
    describe('성공시', () => {
        it('id가 1인 유저 객체를 반환한다', (done) => {
            supertest(app)
                .get('/users/1')
                .end((err, res) => {
                    res.body.should.have.property('id', 1);
                    done();
                });
        });
    });
    describe('실패시', () => {
        it('id가 숫자가 아닐경우 400으로 응답한다', (done) => {
            supertest(app).get('/users/one').expect(400).end(done);
        });
        it('id로 유저를 찾을 수 없을 경우 404로 응답한다', (done) => {
            supertest(app).get('/users/999').expect(404).end(done);
        });
    });
});

describe('DELETE /users/1 는', () => {
    describe('성공시', () => {
        it('204를 응답한다', (done) => {
            supertest(app).delete('/users/1').expect(204).end(done);
        });
    });
    describe('실패시', () => {
        it('id가 숫자가 아닐 경우 400으로 응답한다', (done) => {
            supertest(app).delete('/users/one').expect(400).end(done);
        });
    });
});

describe('POST /users 는', () => {
    describe('성공시', () => {
        let body;
        let name = 'bbak4';
        before((done) => {
            supertest(app)
                .post('/users')
                .send({ name })
                .expect(201)
                .end((err, res) => {
                    body = req.body;
                    done();
                });
        });
        it('생성된 유저 객체를 반환한다', (done) => {
            body.should.have.property('id');
        });
        it('입력한 name을 반환한다', (done) => {
            body.should.have.property('name', name);
        });
    });
});
