-- [실습 2] DDL
-- 테이블 구조 확인
desc member;

-- id 컬럼의 데이터 타입 변경
alter table member modify id VARCHAR(10);

-- age 컬럼 삭제
alter table member drop column age; 

-- interest 컬럼 추가
alter table member add interest VARCHAR(100);