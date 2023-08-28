// 모델 연결
const Visitor = require('../model/Visitor');

// GET '/'
exports.main = (req, res) => {
  res.render('index');
};

// GET '/visitors'
exports.getVisitors = (req, res) => {
  // DB 연결 없이 값을 가지고 왔을 때
  //   res.render('visitor', { data: Visitor.getVisitors() });

  // MySQL 연결
  Visitor.getVisitors((result) => {
    console.log('Controller >>', result);
    res.render('visitor', { data: result });
  });
};

// POST '/visitor'
exports.postVisitor = (req, res) => {
  console.log('req.body >> ', req.body);
  const { name, comment } = req.body;

  Visitor.postVisitor(name, comment, (insertId) => {
    console.log('Controller >> ', insertId);

    res.send({ id: insertId, name: name, comment: comment });
  });
};
