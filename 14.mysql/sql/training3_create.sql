-- [실습 3] CREATE 문
create table user(
	id			VARCHAR(10) primary key,
	pw			VARCHAR(20) not null,
	name		VARCHAR(5) not null,
	gender		ENUM('F', 'M', '') default '',
	birthday	DATE not null,
	age			INT(3) not null default 0
);

-- 테이블 목록 확인
show tables;

-- 테이블 구조 확인
desc user;