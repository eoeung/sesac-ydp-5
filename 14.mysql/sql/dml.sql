-- 테이블 생성
create table customer(
	custid		char(10) primary key ,
	custname	varchar(10) not null ,
	addr		char(10) not null ,
	phone		char(11),
	birth		date
);

-- 테이블 목록 확인
show tables;

-- 테이블 구조 확인
desc customer;

-- #######################################################
-- 2. DML (Data Manipulation Language): 
--		1) insert
insert into customer(
	custid,
	custname,
	addr,
	phone,
	birth
)
values(
	'lucky',
	'강해원',
	'미국 뉴욕',
	'01022223333',
	'2002-03-05'
);

-- 순서를 바꿀 수 있지만, 해당하는 컬럼에 해당하는 값을 넣어야 함
insert into customer(
	addr,
	phone,
	birth,
	custid,
	custname
)
values(
	'대한민국 부산',
	'01098765432',
	'2007-04-28',
	'wow',
	'이지은'
);
-- 속성을 지정하지 않는다면, 컬럼이 정의된 순서대로 값을 입력해야 함
insert into customer
values('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 튜플 동시에 추가
insert into customer values
('asdf', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
('sdfg', '윤지성', '일본 도쿄', '01033331236', '1995-02-15'),
('dfgh', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');

-- ###########################
--		2) update
-- custid = happy인 고객의 주소를 '대한민국 서울'로 변경
update customer set addr = '대한민국 서울' where custid = 'happy';

-- ###########################
--		3) delete
delete from customer where custid = 'happy';

-- ###########################
--		4) select 
-- 테이블안의 전체 데이터 조회
select * from customer;

-- ###########################
INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

-- ###########################
INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);
-- ###########################

-- 모든 고객의 id를 검색
select custid from customer;

-- 모든 고객의 id, 생년월일 검색
select custid, birth from customer;

-- 모든 고객의 생년월일, id 검색
select birth, custid from customer;

-- 모든 고객의 id, 이름, 주소, 전화번호, 생년월일 검색
select custid, custname, addr, phone, birth from customer;
-- '*' 와일드카드 사용
select * from customer;

-- 고객 테이블에 있는 모든 주소 검색
select addr from customer;

-- 고객 테이블에 있는 주소를 중복 없이 검색
-- distinct: 중복값 제거
select distinct addr from customer;

-- ###########################
-- < WHERE 조건 >
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT

-- [비교]
-- 고객 이름이 강해린인 고객의 생년월일 검색
select birth from customer where custname = '강해린';

-- 고객 이름이 강해린이 아닌 고객의 생년월일 검색
select birth from customer where custname <> '강해린';

-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > '박민지';

-- [범위]
-- 1995년이상 2000년 이하 출생 고객의 생년월일 검색
select * from customer where birth between '1995-01-01' and '2000-12-31';
select * from customer where birth >= '1995-01-01' and birth <= '2000-12-31';

-- [집합]
-- 주소가 서울 혹은 런던인 고객 검색
select * from customer where addr IN('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울 혹은 런던이 아닌 고객 검색
select * from customer where addr not IN('대한민국 서울', '영국 런던');
select * from customer where addr != '대한민국 서울' and addr != '영국 런던';

-- [패턴]
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색
-- %: 0개 이상 문자열
select * from customer where addr like '미국%';

-- 고객 이름 두번째 글자가 '지'인 고객 검색
-- _: 임의의 하나의 문자
select * from customer where custname like '_지%';
-- 참고
select * from customer where custname like '_지'; -- 정확하게 2글자 중 마지막이 '지'이면 만족

-- 고객 이름 세번째 글자가 '수'인 고객
select * from customer where custname like '__수%';
-- 참고
select * from customer where custname like '%수'; -- 이름이 몇 자든 마지막 글자가 '수'이면 만족

-- ###########################
-- <복합조건> (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
select * from customer where addr like '%대한민국%' and birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색
select * from customer where addr like '%미국%' or addr like '%영국%';
select * from customer where addr regexp '미국|영국';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone not like '%_4'; -- 앞에 _를 넣어서 4가 마지막 자리라는 것을 확실하게 설정

-- #######################################################
-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본키를 갖는 테이블(customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 문법: foreign key(컬럼명) references 기준 테이블(컬럼명)
create table orders(
	orderid 	int primary key auto_increment,
	custid		char(10) not null, -- fk
	prodname 	char(6) not null,
	price		int not null,
	amount		smallint not null,
	foreign key (custid) references customer(custid) on update cascade on delete cascade
);

-- 테이블 삭제 순서
-- customer 테이블과 orders 테이블이 customer.custid를 기준으로 "관계"를 맺음
-- customer 테이블에 존재하는 회원만 orders에 추가할 수 있음
-- 만약 orders 테이블이 있는데, customer 테이블을 삭제하면,
-- orders 테이블은 어떤 고객의 정보를 보고 싶어도 customer 테이블이 삭제됐기 때문에 알 방법이 없음
-- customer 테이블을 삭제하기에 앞서, orders 테이블을 삭제한 이후에 삭제해야 한다. 

-- 테이블 구조 확인
desc orders;

-- 데이터 삽입
insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');
insert into orders values (NULL, 'kiwi', '프링글스', '3000', 5);
insert into orders values (NULL, 'apple', '프링글스', '3000', 1);
insert into orders values (NULL, 'kiwi', '홈런볼', '2000', 3);

-- 데이터 확인
select * from customer;
select * from orders;

-- on delete cascade 확인
-- 고객 테이블에서 'apple' 고객을 삭제했을 때, 주문 테이블에서 'apple' 고객의 주문 정보가 삭제되는지 확인
delete from customer where custid = 'apple';
-- ###########################
truncate table orders;
set FOREIGN_KEY_CHECKS = 0; -- fk 체크를 하지 않도록 설정
truncate table customer;