// 모델 연결
const Visitor = require('../model/Visitor');

// '/'
exports.main = (req, res) => {
  res.render('index');
};

// '/visitor'
exports.getVisitors = (req, res) => {
  console.log(Visitor.getVisitors());
  res.render('visitor', { data: Visitor.getVisitors() });
};
