-- 데이터베이스: 데이터의 집합
-- DBMS: 데이터베이스를 운영/관리하는 프로그램 (Ex. MySQL)
-- 테이블: 하나 이상의 열과 행으로 구성된 DB의 최소 단위
-- SQL: RDBMS에서 사용되는 언어(DB 구축/관리/활용하기 위한 언어)

-- #######################################################
-- 1. DDL (Data Definition Language): DB, Table 정의하는 언어
-- 	[DB 관련 명령어]
--		1) DB 생성
CREATE DATABASE sesac DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; -- 한글 인코딩

--		2) DB 목록 조회
show databases;

--		3) DB 사용 선언
use sesac;

--		4) DB 삭제
DROP database sesac;

-- ###########################
-- 	[Table 관련 명령어]
--		1) Table 생성
-- 제약 조건 ("옵션")
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가, 테이블에 데이터 추가할 때 마다 자동으로 숫자 증가
-- PRIMARY KEY: 기본키 (중복값 허용 X, NULL 허용 X) → 하나의 테이블당 하나만!!
-- DEFAULT: 기본값, 특정 속성의 기본 값 설정
-- UNIQUE: 중복값 허용 X, NULL 허용 → 하나의 테이블당 여러개 가능!!
create table product(
	id				INT primary key not null unique auto_increment,
	name			VARCHAR(50) not null ,
	model_number	VARCHAR(15) not null ,
	series			VARCHAR(30) not null 
);

--		2) Table 목록 확인
-- 현재 사용중인 DB의 모든 테이블 조회
show tables;

--		3) Table 구조 확인
-- 테이블의 컬럼 정보(자료형, NULL여부, Key여부, 기본값, 기타 제약 조건) 확인
desc product;
describe product;

--		4) Table 삭제
--			(1) drop: 테이블 존재 자체를 삭제
drop table product;

--			(2) truncate: 테이블 구조만 남겨놓은 채 모든 데이터를 삭제
TRUNCATE table product;

--		5) Table 정의 수정
-- 이미 테이블을 생성한 상태에서 테이블에 데이터가 추가되었을 때 사용
-- 컬럼 정보가 바뀌어야 하는 경우, 사용

--			(1) 컬럼 추가
alter table product add new_column DATE;

--			(2) 컬럼 수정
alter table product modify new_column int;
alter table product change new_column new_column2 int; -- 컬럼 이름 수정

--			(3) 컬럼 삭제
alter table product drop new_column2;