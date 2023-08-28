const express = require('express');
// 컨트롤러 연결
const controller = require('../controller/Cvisitor');
// 라우터 객체 참조
const router = express.Router();

// 라우팅 함수 등록
router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);
router.post('/visitor', controller.postVisitor);
router.delete('/visitor', controller.deleteVisitor);

module.exports = router;
