// 모델 연결
const Visitor = require('../model/Visitor');

// '/'
exports.main = (req, res) => {
  res.render('index');
};

// '/visitor'
exports.getVisitors = (req, res) => {
  // DB 연결 없이 값을 가지고 왔을 때
  //   res.render('visitor', { data: Visitor.getVisitors() });

  // MySQL 연결
  Visitor.getVisitors((result) => {
    console.log(`Controller >>' ${result}`);
    res.render('visitor', { data: result });
  });
};
