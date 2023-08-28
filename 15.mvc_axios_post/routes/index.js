const express = require('express');
const controller = require('../controller/Cdynamic');
const router = express.Router();

router.get('/', controller.main);
router.post('/postForm', controller.postForm);

module.exports = router;
