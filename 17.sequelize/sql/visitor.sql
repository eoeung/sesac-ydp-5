-- 테이블 목록 확인
show tables;

-- visitor 테이블 생성
create table visitor(
	id			int primary key auto_increment,
	name		varchar(10) not null,
	comment		mediumtext
);

-- visitor 정보 확인
desc visitor;

insert into visitor(name, comment)
values
('홍길동', '내가 왔다.'),
('이찬혁', '으라차차');

insert into visitor(name, comment)
values
('이수현', '안뇽');

-- 조회
select * from visitor;

-- ###############################
-- database 인코딩 다시 정의해서 생성
show databases;
drop database sesac;

-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database sesac character set utf8mb4 collate utf8mb4_unicode_ci;

use sesac;

-- ###############################
-- root로 접속하는 것은 좋지 않음 → 새로운 유저 생성
-- MySQL 사용자 추가하기 → user라는 계정 생성
create user 'user'@'%' identified with mysql_native_password by '1234';

-- user 계정에 대해서 모든 권한 부여 (grant)
grant all privileges on *.* to 'user'@'%' with grant option;

-- MySQL 캐시 새로고침
flush privileges;

show databases;

-- mysql이라는 Database에 user라는 테이블에 새로 만든 유저 정보가 있음 
select * from mysql.user;

-- 비밀번호 변경
alter user 'user'@'%' identified with mysql_native_password by '12345';