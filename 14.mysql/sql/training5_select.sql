-- [실습 5] SELECT 문

-- 1. 모든 회원 목록 / birthday 기준으로 오름차순 정렬
select * from user order by birthday asc;

-- 2. gender 값이 'M' / name 기준으로 내림차순 정렬
select * from user where gender = 'M' order by name desc;

-- 3. 1990년대에 태어난 회원의 id, name
select id, name from user where date_format(birthday, '%Y') = '1990';
select id, name from user where year(birthday) = '1990';
select id, name from user where birthday >= '1990-01-01' and birthday <= '1990-12-31';
select id, name from user where birthday between '1990-01-01' and '1990-12-31';

-- 4. 6월생 / birthday 기준으로 오름차순
select * from user where date_format(birthday, '%m') = '06' order by birthday asc;
select * from user where month(birthday) = '06' order by birthday asc;
select * from user where birthday like '____-06-__' order by birthday asc;

-- 5. gender 값이 'M' / 1970년 출생
select * from user where gender = 'M' and year(birthday) = '1970';
select * from user where gender = 'M' and date_format(birthday, '%Y') = '1970';
select * from user where gender = 'M' and birthday like '1970%';

-- 6. age 기준으로 내림차순, 처음 3개 레코드
select * from user order by age desc limit 3;

-- 7. age가 25이상 50이하
select * from user where age >= 25 and age <= 50;
select * from user where age between 25 and 50;

-- 8. id 값이 'hong1234'인 레코드의 pw 컬럼의 값을 '12345678'로 변경
update user set pw = '12345678' where id = 'hong1234';
select * from user;

-- 9. id 값이 'jungkrat'인 레코드 삭제
delete from user where id = 'jungkrat';
select * from user;