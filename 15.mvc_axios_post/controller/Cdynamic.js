const Member = require('../model/Member');

// '/'
exports.main = (req, res) => {
  res.render('index');
};

// '/postForm'
exports.postForm = (req, res) => {
  const member = Member.getMember();
  console.log(member);
  console.log(req.body);

  res.send({member: member, tempMember: req.body});
};
