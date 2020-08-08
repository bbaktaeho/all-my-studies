const { register } = require('../../controllers/authController');
const { loginProcess, isNotLoggedIn, isLoggedIn, logout } = require('../middlewares/auth.middleware');
const router = require('express').Router();

/**
 * @description 로그인
 * @route POST /auth/login
 * @body {email, password}
 * ? login validator
 */
router.post('/login', isNotLoggedIn, loginProcess);

/**
 * @description 회원가입
 * @route POST /auth/register
 * @body {email, password, name}
 * ? register validator
 */
router.post('/register', isNotLoggedIn, register);

/**
 * @description 로그아웃
 * @route POST /auth/logout
 */
router.post('/logout', isLoggedIn, logout);

module.exports = router;
