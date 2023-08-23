-- [실습 1] DDL
-- member 테이블 생성
create table member(
	id			VARCHAR(20) primary key,
	name		VARCHAR(5) not null,
	age			INT,
	gender		VARCHAR(2) not null,
	email		VARCHAR(50),
	promotion	VARCHAR(2) default 'x'
);

-- 테이블 목록 확인
show tables;

-- 테이블 구조 확인
desc member;