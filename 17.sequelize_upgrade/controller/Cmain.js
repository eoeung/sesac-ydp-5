// TODO: 컨트롤러
const { Player, Profile, Team } = require('../models');
const { Op } = require('sequelize'); // Sequelize에서 지원하는 연산자를 사용

// GET '/'
// 메인 화면
exports.index = (req, res) => {
  res.render('index');
};

// GET '/players'
// 전체 선수 조회
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    console.log(err);
    res.send('Interval Server Error');
  }
};

// GET '/player/:id'
// 특정 선수 조회
exports.getPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const player = await Player.findOne({
      where: { player_id: player_id },
    });
    res.send(player);
  } catch (err) {
    console.log(err);
    res.send('Interval Server Error');
  }
};

// POST '/player'
// 선수 추가
exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
    });
    res.send(newPlayer);
  } catch (err) {
    console.log(err);
    res.send('Interval Server Error');
  }
};

// PATCH '/player/:team_id/team'
// 특정 선수의 소속 팀 변경
exports.patchPlayerTeam = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatePlayer = await Player.update(
      {
        team_id: team_id,
      },
      {
        where: { player_id: player_id },
      }
    );
    res.send(updatePlayer);
  } catch (err) {
    console.log(err);
    res.send('Interval Server Error');
  }
};

// DELETE '/player/:player_id'
// 특정 선수 삭제
exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({
      where: { player_id: player_id },
    });
    console.log(isDeleted);
    if (isDeleted) {
      return res.send(true);
    } else {
      return res.send(false);
    }
    // RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: 1
    // res.send()로는 Number를 반환할 수 없음
  } catch (err) {
    console.log(err);
    res.send('Interval Server Error');
  }
};

// GET '/teams'
// 전체 팀 조회
exports.getTeams = async (req, res) => {
  try {
    // 쿼리스트링 꺼내오기
    const { sort, search } = req.query;
    let teams;

    if (sort === 'name_asc') {
      // sort키가 있으면 name기준으로 오름차순 정렬
      // order: [['name', 'ASC]] // name 속성 기준 오름차순 정렬
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'ASC']],
      });
    } else if (sort === 'name_desc') {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'DESC']],
      });
    } else if (search) {
      teams = await Team.findOne({
        attributes: ['team_id', 'name'],
        where: {
          name: { [Op.like]: `%${search}%` },
          // select * from team where name = '%KT%';
        },
      });
    } else {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'], // 프론트엔드에게 필요한 정보만을 줄 수 있음
      });
    }
    res.send(teams);
  } catch (err) {
    console.log(err);
    res.send('Interval Server Error');
  }
};

// GET '/team/:team_id'
// 특정 팀 조회
exports.getTeam = function (req, res) {
  const { team_id } = req.params;
  Team.findOne({
    where: { team_id: team_id },
    attributes: ['team_id', 'name'],
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send('Interval Server Error');
    });
};

// GET '/team/:team_id/players'
// 특정 팀의 모든 선수를 조회
exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id: team_id },
      include: [{ model: Player }], // left outer join
    });
    res.send(team);
  } catch (err) {
    console.log(err);
    res.send('Interval Server Error');
  }
};
