// 모델 연결
// Sequelize 사용 시, 기존에 사용했던 Query문을 사용할 필요가 없음
// const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // models안에 있는 파일을 구조 분해 할당

// GET '/'
exports.main = (req, res) => {
  res.render('index');
};

// GET '/visitors'
// 모든 방명록 조회
exports.getVisitors = async (req, res) => {
  // [before]
  // Visitor.getVisitors((result) => {
  //   console.log('Controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  // [after]
  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

// GET '/visitor/:id'
// 방명록 1개 조회
exports.getVisitor = async (req, res) => {
  // [before]
  // // QueryString → /visitor?id=1
  // console.log('req.query >> ', req.query); // {}
  // // param → /visitor/:id
  // console.log('req.params >> ', req.params); // { id: '1'}

  // const { id } = req.params;
  // Visitor.getVisitor(id, (result) => {
  //   console.log(' controller >> ', result);
  //   res.send(result);
  // });

  // [after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });

  console.log(result);
  res.send(result);
};

// POST '/visitor'
// 방명록 등록
exports.postVisitor = async (req, res) => {
  // [before]
  // console.log('req.body >> ', req.body);
  // const { name, comment } = req.body;

  // Visitor.postVisitor(name, comment, (insertId) => {
  //   console.log('Controller >> ', insertId);

  //   res.send({ id: insertId, name: name, comment: comment });
  // });

  // [after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });

  // console.log(result); // create()가 실행된 결과 (== insert한 데이터 값)
  res.send(result);
};

// DELETE '/visitor'
// 방명록 삭제
exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log('req.body : ', req.body);
  // const { id } = req.body;

  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller >> ', result);
  //   res.send(result);
  // });

  // [after]
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  res.send(true);
};

// PATCH '/visitor'
// 방명록 수정
exports.updateVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);

  // Visitor.updateVisitor(req.body, () => {
  //   res.send({ isUpdated: true });
  // });

  // [after]
  // update(변경될 값, where 절)
  await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );

  res.send({ isUpdated: true });
};
