const express = require('express');
// 컨트롤러 연결
const controller = require('../controller/Cvisitor');
// 라우터 객체 참조
const router = express.Router();

// 라우팅 함수 등록
router.get('/', controller.main); // 메인 페이지
router.get('/visitors', controller.getVisitors); // 모든 방명록 조회
// router.get('/visitor', controller.getVisitor); // 방명록 1개 조회(QueryString)
router.get('/visitor/:id', controller.getVisitor); // 방명록 1개 조회(param)
router.post('/visitor', controller.postVisitor); // 방명록 등록
router.delete('/visitor', controller.deleteVisitor); // 방명록 삭제
router.patch('/visitor', controller.updateVisitor); // 방명록 수정

module.exports = router;
