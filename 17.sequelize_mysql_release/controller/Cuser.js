// TODO: 컨트롤러 코드
// const User = require('../model/User'); // 기존 MySQL 코드는 사용하지 않음
// 컨트롤러에서 모델(models/...)을 불러와 바로 쿼리문을 작성
const { User } = require('../models'); // 구조 분해 할당으로 models 안에 있는 모듈을 불러온다.

// 메인 화면
exports.main = (req, res) => {
  res.render('index');
};

// 회원 가입 페이지
exports.getSignup = (req, res) => {
  res.render('signup');
};

// 회원 가입
exports.postSignup = async (req, res) => {
  const { userid, pw, name } = req.body;
  try {
    const result = await User.create({
      userid: userid,
      pw: pw,
      name: name,
    });

    // console.log(result); // user { dataValues: { ... }, ... }
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

// 로그인 페이지
exports.getSignin = (req, res) => {
  res.render('signin');
};

// 로그인
exports.postSignin = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const result = await User.findOne({
      where: {
        userid: userid,
        pw: pw,
      },
    });

    console.log(result); // 성공 시 조회된 데이터 및 메타데이터 반환 / 실패 시 null // // user { dataValues: { ... }, ... }
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

// 로그인 성공 시, 회원 정보 화면으로 이동
exports.postProfile = async (req, res) => {
  try {
    const { userid } = req.body;
    const result = await User.findOne({
      where: {
        userid: userid,
      },
    });
    console.log('######################');
    console.log('######################');
    console.log('######################');
    // console.log(result);
    console.log(result.dataValues);
    res.render('profile', { result: result.dataValues });
  } catch (err) {
    console.log(err);
  }
};

// 회원 정보 수정
exports.updateProfile = async (req, res) => {
  console.log(req.body);
  try {
    const result = await User.update(
      {
        name: req.body.name,
        pw: req.body.pw,
      },
      {
        where: { id: req.body.id },
      }
    );
    // console.log(result); // [ 1 ]

    if (result) {
      res.send({ isUpdated: true });
    } else {
      res.send({ isUpdated: false });
    }
  } catch (err) {
    console.log(err);
  }
};

// 회원 정보 삭제
exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await User.destroy({
      where: {
        id: id,
      },
    });

    // console.log(result); // 1
    if (result) {
      res.send({ isDeleted: true });
    } else {
      res.send({ isDeleted: false });
    }
  } catch (err) {
    console.log(err);
  }
};
