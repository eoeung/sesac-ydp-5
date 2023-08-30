// visitor 모델 정의
const Visitor = (Sequelize, DataTypes) => {
  // Sequelize: models/index.js에서 sequelize
  // DataTypes: models/index.js에서 Sequelize
  const model = Sequelize.define(
    'visitor',
    {
      id: {
        // id int primary key auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not null,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor', // 실제 DB 테이블명
      freezeTableName: true, // 테이블명 고정 (모델 이름을 테이블로 바꿀 때, 복수형으로 바뀜)
      timestamps: true, // createAt, updateAt이라는 컬럼이 생성됨
    }
  );

  return model;
};

module.exports = Visitor;
