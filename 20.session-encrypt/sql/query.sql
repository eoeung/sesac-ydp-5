-- 데이터베이스 목록 조회
show databases;

-- sesac 데이터베이스 사용
use sesac;

-- 모든 테이블 조회
show tables;

-- 기존에 있던 user 테이블 삭제
drop table user;

-- user 테이블 생성 → Sequelize로 대체

-- user 테이블 구조 확인
describe user;

-- user 테이블 레코드 조회
select * from user;