// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');

const router = express.Router();
router.get('/', controller.main);
router.get('/signup', controller.getSignup); // 회원 가입 페이지
router.post('/signup', controller.postSignup); // 회원 가입
router.get('/signin', controller.getSignin); // 로그인 페이지
router.post('/signin', controller.postSignin); // 로그인
router.post('/profile', controller.postProfile); // 로그인 성공 시, 회원 정보 화면으로 이동
router.patch('/profile/edit', controller.updateProfile); // 회원 정보 수정
router.delete('/profile/delete', controller.deleteProfile); // 회원 정보 삭제

module.exports = router;
