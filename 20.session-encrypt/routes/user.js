const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/register', controller.getRegister); // 회원가입 페이지
router.post('/register', controller.postRegister); // 회원가입
router.get('/users', controller.getAllUsers); // 전체 회원 조회
router.get('/login', controller.getLogin); // 로그인 페이지
router.post('/login', controller.postLogin); // 로그인
router.get('/logout', controller.getLogout); // 로그아웃
router.get('/profile', controller.getProfile); // 프로필 페이지
router.patch('/profile', controller.patchProfile); // 프로필 수정
router.delete('/profile', controller.deleteProfile); // 탈퇴

module.exports = router;
