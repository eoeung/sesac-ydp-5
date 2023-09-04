const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/register', controller.getRegister); // 회원가입 페이지
router.post('/postRegister', controller.postRegister); // 회원가입

router.get('/users', controller.getAllUsers); // 전체 회원 조회

module.exports = router;
