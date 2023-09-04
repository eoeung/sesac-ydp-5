'use strict';

const Sequelize = require('sequelize');
const config = require('../config/config'); // config.json이 아닌 config.js를 가지고 온다.
const db = {};

// console.log(config.config);
const { database, username, password } = config.config.development;

const sequelize = new Sequelize( // db, user, password, config객체 저장
  database,
  username,
  password,
  config.config.development // 내가 원하는 DB 정보만 넣어준다.
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
