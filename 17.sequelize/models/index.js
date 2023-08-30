'use strict';

// sequelize 모듈 호출
const Sequelize = require('sequelize');

// config.json 파일을 불러와서 development 환경의 DB 설정
// config: DB 접근 가능한 설정 값 저장
const config = require(__dirname + '/../config/config.json')['development'];

// 빈 db 객체 생성
const db = {};

//
const sequelize = new Sequelize(
  config.database, // sesac
  config.username, // user
  config.password, // 12345
  config // {} / 객체를 넘겨줌
);

// db = {} → { sequelize: sequelize, Sequelize: Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// models/ 폴더에 정의되는 model(테이블)은 db 객체에 저장
// db = { sequelize: Sequelize, Visitor: 모델(테이블)}
db.Visitor = require('./Visitor')(sequelize, Sequelize);

module.exports = db;
