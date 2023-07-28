// ＊Javascript 표준 내장 객체
// 1) Date 객체: 시간, 날짜
let now = new Date(); // 현재 일시
console.log(now); // 2023-07-28T06:09:58.618Z

// [타임스탬프]
// → 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 함수
let jan_01_1970 = new Date(0);
console.log(jan_01_1970); // 1970-01-01T00:00:00.000Z

let jan_02_1970 = new Date(24 * 3600 * 1000); // 하루 = 24시간 * 60분(3600초) * 1초(1000밀리초)
console.log(jan_02_1970); // 1970-01-02T00:00:00.000Z

// new Date(date_string)
let date1 = new Date('2023-07-17');
console.log(date1); // 2023-07-17T00:00:00.000Z

let date2 = new Date('2023', '06', '17'); // MM주의 (0~11 → 1월 ~ 12월)
console.log(date2); // 2023-07-16T15:00:00.000Z

// ※ 구글 개발자 도구와 9시간 차이난다.

// [관련 메서드]
console.table(date1.getFullYear()); // 2023
console.table(date1.getMonth()); // 6
console.table(date1.getDate()); // 17
console.table(date1.getHours()); // 9
console.table(date1.getMinutes()); // 0
console.table(date1.getSeconds()); // 0
console.table(date1.getMilliseconds()); // 0
console.table(date1.getDay()); // 1
console.log('----------------');

// Quiz. 오늘은 평일? 주말?
// Date 객체를 이용해 오늘 요일을 얻고, (힌트. getDay())
// if or switch 구문 이용해서 평일/주말인지 콘솔창에 출력하는 코드 작성

let today = new Date().getDay(); // 일요일 ~ 토요일 → 0 ~ 6
let today2 = new Date('2023-07-28').getDay(); // 일요일 ~ 토요일 → 0 ~ 6
let today3 = new Date('2023', '06', '28').getDay(); // 일요일 ~ 토요일 → 0 ~ 6
console.log(today, today2, today3); // 5 5 5

let answer;
if (today === 0 || today === 6) answer = '주말';
else answer = '평일';
console.log(`오늘은 ${answer} 입니다.`);
console.clear();

// [Math 객체]
// 1) 속성
console.log(Math.E); // 자연로그(2.718281828459045)
console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT2); // 1.4142135623730951

// 2) 메소드
// (1) 최소값, 최대값
console.log(Math.min(100, -2, 0, 5, 0)); // -2
console.log(Math.max(100, -2, 0, 5, 0)); // 100

// (2) 반올림, 올림, 내림
console.log(Math.round(5.3124)); // 5
console.log(Math.ceil(5.3124)); // 6
console.log(Math.floor(5.3124)); // 5

// (3) 무작위 난수
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.random() * 10); // 0 <= x < 10
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10

// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// Quiz. Math.random()
// 1 ~ 100 정수
// (1) 기본 상태 → 0 <= x < 1
// (2) 100을 곱한다 → 0 <= x < 100
// (3) 1을 더한다. → 1 <= x < 101
// 1 ~ 100.9999이므로 내림 처리하면 1 ~ 100 완성 
console.log( Math.floor(Math.random() * 100 +1) );

// 20 ~ 22 정수
// (1) 기본 상태 → 0 <= x < 1
// (2) 3을 곱한다. → 0 <= x < 3
// (3) 20을 더한다. → 20 <= x < 23
// 20 ~ 22.9999이므로 내림 처리하면 20 ~ 22 완성

console.log( Math.floor(Math.random()*3 + 20) );