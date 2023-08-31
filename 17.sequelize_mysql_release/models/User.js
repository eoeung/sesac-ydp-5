// User 모델을 정의
// MySQL에 있는 user 테이블을 정의
/**
 * [테이블 구조]
 * create table user(
	id			int primary key auto_increment,
	userid		varchar(20) not null,
	name		varchar(10) not null,
	pw			varchar(20) not null
 * );
 */

const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'user', // 모델명
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    }, // 컬럼 정의
    {
      tableName: 'user', // 테이블명
      freezeTableName: true, // true → 테이블명을 복수로 설정하지 않음
      timestamps: true, // true → createAt, updateAt 컬럼 생성
    } // 모델 옵션
  );

  return model;
};

module.exports = User;
