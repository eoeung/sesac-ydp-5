-- #######################################################
-- JOIN

select * from customer;
select * from orders;
select * from customer, orders;

-- customer, order 테이블 행 개수 구하기
select count(*) from customer; -- 9
select count(*) from orders; -- 19
select count(*) from customer, orders; -- 171 = 9 * 19
-- → cross join

-- where 절을 이용해 조인 조건 추가
-- 테이블명.속성 : 어느 테이블의 속성인지 지정해줌
select * from customer, orders where customer.custid = orders.custid order by customer.custname;

-- inner join ... on 을 이용해 조인 조건 추가
select * from customer inner join orders on customer.custid = orders.custid order by customer.custname;

-- "고객 이름"과 고객이 주문한 "상품명", "상품 가격" 조회
-- 고객 이름: customer
-- 상품명, 상품가격: orders
-- where 절
select custname, prodname, price from customer, orders
where customer.custid = orders.custid;

-- inner join ... on
select custname, prodname, price from customer
inner join orders
on customer.custid = orders.custid;

-- 고객 이름별로 주문한 제품 총 구매액을 고객 별로 정렬
select custname, sum(price * amount) as total_price
from customer, orders
where customer.custid = orders.custid
group by custname
order by total_price desc;

-- ###########################