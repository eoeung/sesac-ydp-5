const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의
// localhost:PORT/기본주소
// [Player]
router.get('/', controller.index); // 메인 화면
router.get('/players', controller.getPlayers); // 전체 선수 조회
router.get('/player/:player_id', controller.getPlayer); // 특정 선수 조회
router.post('/player', controller.postPlayer); // 선수 추가
router.patch('/player/:player_id/team', controller.patchPlayerTeam); // 특정 선수의 소속 팀 변경
router.delete('/player/:player_id', controller.deletePlayer); // 특정 선수 삭제

// [Team]
router.get('/teams', controller.getTeams); // 전체 팀 조회
router.get('/team/:team_id', controller.getTeam); // 특정 팀 조회
router.get('/team/:team_id/players', controller.getTeamPlayers); // 특정 팀의 모든 선수를 조회

module.exports = router;
