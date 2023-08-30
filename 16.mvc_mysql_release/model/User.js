// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'sesac',
  user: 'user',
  password: '12345',
});

// 회원 가입
exports.postSignup = (userInfo, cb) => {
  // console.log(userInfo);
  const { userid, pw, name } = userInfo;
  const selectUserCountById = `SELECT COUNT(*) AS COUNT FROM USER WHERE USERID = '${userid}'`;
  connection.query(selectUserCountById, (err, rows) => {
    if (err) throw err;

    // console.log(rows[0].COUNT);

    // 아이디 중복 확인
    if (rows[0].COUNT) {
      const message = '해당 아이디는 이미 존재합니다.';
      cb({ message: message });
    } else {
      const insertUser = `INSERT INTO USER(USERID, NAME, PW) VALUES('${userid}', '${name}', '${pw}')`;
      connection.query(insertUser, (err, rows) => {
        if (err) throw err;
        cb(rows);
      });
    }
  });
};

// 로그인
exports.postSignin = (userInfo, cb) => {
  const { userid, pw } = userInfo;
  //   const selectUserInfo = `SELECT * FROM USER WHERE USERID = '${userid}'`;
  const selectUserCountByIdPw = `SELECT COUNT(*) AS COUNT FROM USER WHERE USERID = '${userid}' AND PW = '${pw}'`;
  connection.query(selectUserCountByIdPw, (err, rows) => {
    if (err) throw err;

    // 로그인 성공 여부
    if (rows[0].COUNT) {
      cb({ successLogin: true });
    } else {
      cb({ successLogin: false });
    }
  });
};

// 로그인 성공 시, 회원 정보 화면으로 이동
exports.postProfile = (userid, cb) => {
  const selectUserInfoByUserid = `SELECT * FROM USER WHERE USERID = '${userid}'`;
  connection.query(selectUserInfoByUserid, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    cb(rows[0]);
  });
};

// 회원 정보 수정
exports.updateProfile = (userInfo, cb) => {
  const { id, userid, pw, name } = userInfo;
  const updateUserInfo = `UPDATE USER SET PW = '${pw}', NAME = '${name}' WHERE ID = '${id}'`;

  connection.query(updateUserInfo, (err, rows) => {
    if (err) throw err;

    // console.log(rows);
    cb(rows.affectedRows);
  });
};

// 회원 정보 삭제
exports.deleteProfile = (id, cb) => {
  const deleteOne = `DELETE FROM USER WHERE ID = '${id}'`;
  connection.query(deleteOne, (err, rows) => {
    if (err) throw err;

    cb(rows.affectedRows);
  });
};
