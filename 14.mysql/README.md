# 14.MySQL (2023/08/23, 08/25)

## [DataBase & MySQL]

- 파일 / 데이터베이스
- DBMS
  - RDBMS
    - MySQL
- 용어
	- column = attribute
	- row = record = tuple
	- table = relation
	- key
		- primary key
		- foreign key
- SQL
  - data type
    - string
      - char
      - varchar
      - text
      - mediumtext
    - number
      - tinyint
      - smallint
      - int
      - bigint
      - float
    - date
      - date
      - time
      - datetime
      - timestamp
  - DDL
    - create
      - create datebase
      - create table
    - alter
      - alter table add
      - alter table drop column
      - alter table modify
    - drop
    - truncate
  - DML
    - select
      - distinct
      - limit
      - from
      - where
        - 비교 연산자
          - =
          - \>
          - \>=
          - <
          - <=
        - 부정 연산자
          - !=
          - ^=
          - <>
          - NOT 컬럼명 =
        - 범위, 집합, 패턴, NULL
          - BETWEEN a AND b
          - IN()
          - LIKE ''
            - %
            - _
          - IS NULL
        - 복합 조건
          - AND
          - OR
          - NOT
        - order by
        - group by
          - sum()
          - avg()
          - max()
          - min()
          - count()
          - count(distinct)
        - having
      - join
        - cross join
        - inner join
        - natural join
        - outer join
    - insert
    - update
    - delete
  - DCL
    - grant
    - revoke
---

### \[실습 1] DDL

[[실습 1] DDL](./sql/training1_ddl.sql)

### \[실습 2] DDL

[[실습 2] DDL](./sql/training2_ddl.sql)

### \[실습 3] CREATE 문

[[실습 3] CREATE 문](./sql/training3_create.sql)

### \[실습 4] INSERT 문

[[실습 4] INSERT 문](./sql/training4_insert.sql)

### \[실습 5] SELECT 문

[[실습 5] SELECT 문](./sql/training5_select.sql)

### \[실습 6] [선택 실습] 아래 조건을 만족하는 SQL문 작성하기

[[실습 6] [선택 실습] 아래 조건을 만족하는 SQL문 작성하기](./sql/training6_relation.sql)

### \[실습 7] < 실습 > 

[[실습 7] < 실습 > ](./sql/training7_extension.sql)