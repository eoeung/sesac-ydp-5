-- [실습 4] INSERT 문
-- 테이블 목록 확인
show tables;

-- 테이블 구조 확인
desc user;

-- 데이터 삽입
insert into user(
	id,
	pw,
	name,
	gender,
	birthday,
	age
)
values
('hong1234', '804bkg', '홍길동', 'M', '1990-01-31', 33),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

-- 데이터 조회
select * from user;

-- 날짜 차이를 구해서 현재 나이 구하기
select FLOOR(datediff(now(), '1999-11-11') / 365) as age;

-- 현재 날짜와 시간 구하기
select now();
select sysdate();