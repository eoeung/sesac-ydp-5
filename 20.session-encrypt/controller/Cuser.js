const { User } = require('../models');
const bcryptObj = require('../utils/bcrypt');

// GET '/user/register'
// 회원가입 페이지
exports.getRegister = (req, res) => {
  res.render('register');
};

// POST '/user/register'
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
      // 암호화
      const { hash } = bcryptObj;
      const hashedPw = hash(pw);

      //   회원 등록
      const result = await User.create({
        userid: userid,
        pw: hashedPw,
        name: name,
      });

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
    // console.log('### getAllUsers ### ', result);
    for (let member of result) {
      // console.log('### getAllUsers ###', member);
    }
    res.render('users', { result: result, name: req.session.name });
  } catch (err) {
    console.log(err);
  }
};

// GET '/user/login'
// 로그인 페이지
exports.getLogin = (req, res) => {
  res.render('login');
};

// POST '/user/login'
// 로그인
exports.postLogin = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const result = await User.findOne({
      where: {
        userid: userid,
        // pw: pw, // 밑에 bcrypt로 비교하므로 where절에 넣지 않음
      },
    });

    // console.log('######### [postLogin] #############', result.dataValues);
    // console.log('result ::::: ', result.dataValues.name);

    if (result) {
      // 비밀번호 일치여부 확인
      const { compare } = bcryptObj;
      const isMatch = compare(pw, result.dataValues.pw);

      if (isMatch) {
        // 세션 설정
        req.session.name = result.dataValues.name;
        req.session.userid = result.dataValues.userid; // 프로필 조회할 때, 세션에 저장한 아이디로 확인
        res.send(result);
      } else {
        // 비밀번호 불일치
        res.send({ message: 'fail' });
      }
    } else {
      // 아이디 불일치
      res.send({ message: 'fail' });
    }
  } catch (err) {
    console.log(err);
  }
};

// GET '/user/logout'
// 로그아웃
exports.getLogout = (req, res) => {
  // console.log(req.sessionID);
  // console.log(req.session.name);

  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send({ message: 'fail' });
    } else {
      res.send({ message: 'success' });
    }
  });
};

// GET '/user/profile'
// 프로필
exports.getProfile = async (req, res) => {
  // console.log(req.session);
  try {
    const result = await User.findOne({
      where: {
        userid: req.session.userid,
      },
    });

    // console.log('########### getProfile #############', result);

    if (result) {
      res.render('profile', { data: result, message: 'success' });
    } else {
      res.render('profile', { message: 'fail' });
    }
  } catch (err) {
    console.log(err);
  }
};

// PATCH '/user/profile'
// 프로필 수정
// name, pw(암호화) 수정
exports.patchProfile = async (req, res) => {
  console.log('############## patchProfile ################', req.body);
  const { id, name, pw } = req.body;
  const { hash } = bcryptObj;
  // pw 암호화
  const hashedPw = hash(pw);

  try {
    const result = await User.update(
      {
        name: name,
        pw: hashedPw,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (result) {
      req.session.name = name;
      res.send({ name: name, pw: hashedPw });
    } else {
      res.send({ message: 'fail' });
    }
  } catch (err) {
    console.log(err);
  }
};

// DELETE '/user/delete'
// 탈퇴
exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await User.destroy({
      where: {
        id: id,
      },
    });

    if (result) {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
          res.send({ message: 'error' });
        } else {
          res.send({ data: result });
        }
      });
    } else {
      res.send({ message: 'fail' });
    }
  } catch (err) {
    console.log(err);
  }
};
