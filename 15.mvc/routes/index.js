// 이 모듈의 역할
// 경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// module.exports 구문을 통해 Router를 내보내야 다른 모듈에서 Router객체를 사용할 수 있음
module.exports = router;
