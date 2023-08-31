-- 데이터베이스 목록 조회
show databases;

-- sesac 데이터베이스 사용
use sesac;

-- 테이블 목록 조회
show tables;

-- user 테이블 생성
create table user(
	id			int primary key auto_increment,
	userid		varchar(20) not null,
	name		varchar(10) not null,
	pw			varchar(20) not null
);

-- user 테이블 구조 확인
describe user;

-- user 테이블 삭제
-- Sequelize의 timestamps: true로 적용하기 위해서
drop table user;

-- 유저 정보 확인
-- select * from mysql.user;

-- user 테이블 조회
select * from user;

-- 테스트 데이터 삭제
delete from user;