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

exports.getVisitors = (cb) => {
  const sql = 'SELECT * FROM visitor';
  connection.query(sql, (err, rows) => {
    if (err) throw err;

    console.log('model : ', rows);
    cb(rows);
  });
};

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

exports.deleteVisitor = (id, cb) => {
  const sql = `DELETE FROM VISITOR WHERE id = '${id}'`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;

    console.log('model >> ', rows);
    cb(true); // { id: id }
  });
};
