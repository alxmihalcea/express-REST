const expect = require('chai').expect;
const sinon = require('sinon');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller - Login', function () {
  it('should throw an error if accessing db fails', function (done) {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'parola',
      },
    };

    AuthController.login(req, {}, () => {}).catch((error) => {
      expect(error).to.be.an('error');
      done();
    });

    User.findOne.restore();
  });
  // Connect to db test
});
