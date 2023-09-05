const bcrypt = require('bcrypt');
const bcryptObj = {};

function hashPw(password, saltRounds = 12) {
  return bcrypt.hashSync(password, saltRounds);
}

function compareHash(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

bcryptObj.hash = hashPw;
bcryptObj.compare = compareHash;

module.exports = bcryptObj;
