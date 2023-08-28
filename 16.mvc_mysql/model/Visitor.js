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
  password: '1234',
  database: 'sesac',
});

exports.getVisitors = (cb) => {
  const sql = 'SELECT * FROM visitor';
  connection.query(sql, (err, rows) => {
    if (err) throw err;

    console.log(`Visitor.js : ${rows}`);
    cb(rows);
  });
};
