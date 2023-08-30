// TODO: 컨트롤러 코드
const User = require('../model/User');

// 메인 화면
exports.main = (req, res) => {
  res.render('index');
};

// 회원 가입 페이지
exports.getSignup = (req, res) => {
  res.render('signup');
};

// 회원 가입
exports.postSignup = (req, res) => {
  //   console.log(req.body);
  const param = req.body;
  //   console.log(param);
  User.postSignup(param, (result) => {
    res.send(result);
  });
};

// 로그인 페이지
exports.getSignin = (req, res) => {
  res.render('signin');
};

// 로그인
exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    res.send(result);
  });
};

// 로그인 성공 시, 회원 정보 화면으로 이동
exports.postProfile = (req, res) => {
  const { userid } = req.body;

  User.postProfile(userid, (result) => {
    res.render('profile', result);
  });
};

// 회원 정보 수정
exports.updateProfile = (req, res) => {
  User.updateProfile(req.body, (result) => {
    // console.log(result);
    if (result) {
      res.send({ isUpdated: true });
    } else {
      res.send({ isUpdated: false });
    }
  });
};

// 회원 정보 삭제
exports.deleteProfile = (req, res) => {
  const { id } = req.body;
  User.deleteProfile(id, (result) => {
    if (result) {
      res.send({ isDeleted: true });
    } else {
      res.send({ isDeleted: false });
    }
  });
};
