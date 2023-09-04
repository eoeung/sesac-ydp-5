const { User } = require('../models');

// GET '/user/register'
// 회원가입 페이지
exports.getRegister = (req, res) => {
  res.render('register');
};

// POST '/user/postRegister'
// 회원가입
exports.postRegister = async (req, res) => {
  try {
    const { userid, pw, name } = req.body;

    // 기존에 회원이 있는지 확인
    const findOne = await User.findOne({
      where: {
        userid: userid,
      },
    });

    // console.log(findOne);

    if (findOne) {
      res.send({ message: 'fail' });
    } else {
      //   회원 등록
      const result = await User.create({
        userid: userid,
        pw: pw,
        name: name,
      });

      // 세션 설정
      req.session.name = name;
      res.send(result);
    }
  } catch (err) {
    console.log(err);
  }
};

// GET '/user/users'
// 전체 회원 조회
exports.getAllUsers = async (req, res) => {
  try {
    const result = await User.findAll();
    console.log(result);
    res.render('users', { result: result, name: req.session.name });
  } catch (err) {
    console.log(err);
  }
};
