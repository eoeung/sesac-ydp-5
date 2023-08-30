// DB 연결 없이 값을 가지고 왔을 때
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: '홍길동', comment: '내가 왔다.' },
//     { id: 2, name: '이찬혁', comment: '으라차차' },
//   ];
// };

// MySQL 연결
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '12345',
  database: 'sesac',
});

// 모든 방명록 조회
exports.getVisitors = (cb) => {
  // const sql = 'SELECT * FROM VISITOR'; // 기존
  const selectAllVisitorByIdASC = `SELECT * FROM VISITOR ORDER BY ID DESC`; // id 기준 내림차순
  connection.query(selectAllVisitorByIdASC, (err, rows) => {
    if (err) throw err;

    console.log('model : ', rows);
    cb(rows);
  });
};

// 방명록 1개 조회
exports.getVisitor = (id, cb) => {
  const selectOneVisitor = `SELECT * FROM VISITOR WHERE ID = '${id}'`;

  connection.query(selectOneVisitor, (err, rows) => {
    if (err) throw err;

    console.log(' selectOneVisitor >> ', rows);
    cb(rows[0]);
  });
};

// 방명록 등록
exports.postVisitor = (name, comment, cb) => {
  // 매개변수
  // data: 프론트엔드에서 유저가 입력한 값(req.body)
  // callback; query 실행 후, 호출할 함수
  const sql = `INSERT INTO VISITOR(name, comment) VALUES('${name}', '${comment}')`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;

    console.log('model >> ', rows);
    cb(rows.insertId);
  });
};

// 방명록 삭제
exports.deleteVisitor = (id, cb) => {
  const sql = `DELETE FROM VISITOR WHERE id = '${id}'`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;

    console.log('model >> ', rows);
    cb(true); // { id: id }
  });
};

// 방명록 수정
exports.updateVisitor = (updateData, cb) => {
  const { id, name, comment } = updateData;
  const updateOne = `UPDATE VISITOR SET NAME = '${name}', COMMENT = '${comment}' WHERE ID = '${id}'`;

  connection.query(updateOne, (err, rows) => {
    if(err) throw err;

    console.log(rows);
    cb();
  })
};
