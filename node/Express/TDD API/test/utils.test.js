const utils = require('../utils');
const should = require('should');

describe('utils.js 모듈의 capitalize 함수는', () => {
    it('문자열의 첫 번째 문자를 대문자로 변환한다', () => {
        // 테스트 코드 작성
        const result = utils.capitalize('hello');
        result.should.be.equal('Hello');
    });
});
