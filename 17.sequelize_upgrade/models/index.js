'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// TODO: 모델 모듈 불러오기
const Player = require('./Player')(sequelize, Sequelize);
const Profile = require('./Profile')(sequelize, Sequelize);
const Team = require('./Team')(sequelize, Sequelize);

// db 객체에 저장하기 전에, 관계 형성을 먼저 해야한다.
// TODO: 관계 형성
// 1) Player : Profile = 1 : 1
// 한 선수 당 하나의 프로필을 가짐
Player.hasOne(Profile, {
  foreignKey: 'player_id',
  sourceKey: 'player_id',
  // 플레이어가 수정되거나 삭제되면 Profile이 수정 및 삭제되도록 설정
  onDelete: 'CASCADE', // 연쇄 삭제
  onUpdate: 'CASCADE', // 연쇄 수정
});
// foreignKey → Profile의 컬럼인 foreignKey: 'player_id'가
// sourceKey → Player의 컬럼인 sourceKey: 'player_id'를 참조 한다.
Profile.belongsTo(Player, { foreignKey: 'player_id', targetKey: 'player_id' });

// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재
Team.hasMany(Player, { foreignKey: 'team_id', sourceKey: 'team_id' });
Player.belongsTo(Team, { foreignKey: 'team_id', targetKey: 'team_id' });

// TODO: 관계 정의한 모델들을 db 객체에 저장
db.Player = Player;
db.Profile = Profile;
db.Team = Team;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
