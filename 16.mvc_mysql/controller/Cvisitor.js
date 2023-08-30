// 모델 연결
const Visitor = require('../model/Visitor');

// GET '/'
exports.main = (req, res) => {
  res.render('index');
};

// GET '/visitors'
// 모든 방명록 조회
exports.getVisitors = (req, res) => {
  // DB 연결 없이 값을 가지고 왔을 때
  //   res.render('visitor', { data: Visitor.getVisitors() });

  // MySQL 연결
  Visitor.getVisitors((result) => {
    console.log('Controller >>', result);
    res.render('visitor', { data: result });
  });
};

// GET '/visitor/:id'
// 방명록 1개 조회
exports.getVisitor = (req, res) => {
  // QueryString → /visitor?id=1
  console.log('req.query >> ', req.query); // {}
  // param → /visitor/:id
  console.log('req.params >> ', req.params); // { id: '1'}

  const { id } = req.params;
  Visitor.getVisitor(id, (result) => {
    console.log(' controller >> ', result);
    res.send(result);
  });
};

// POST '/visitor'
// 방명록 등록
exports.postVisitor = (req, res) => {
  console.log('req.body >> ', req.body);
  const { name, comment } = req.body;

  Visitor.postVisitor(name, comment, (insertId) => {
    console.log('Controller >> ', insertId);

    res.send({ id: insertId, name: name, comment: comment });
  });
};

// DELETE '/visitor'
// 방명록 삭제
exports.deleteVisitor = (req, res) => {
  console.log('req.body : ', req.body);
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log('controller >> ', result);
    res.send(result);
  });
};

// PATCH '/visitor'
// 방명록 수정
exports.updateVisitor = (req, res) => {
  console.log(req.body);

  Visitor.updateVisitor(req.body, () => {
    res.send({ isUpdated: true });
  });
};
