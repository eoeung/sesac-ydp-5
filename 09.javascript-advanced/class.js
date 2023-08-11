// ＊Class
// 객체 생성 템플릿 → 객체를 만들기 위해 사용

// Ex) '집'이라는 현실 세계의 객체를 생성
/* 
 * 속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
 * 메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

class House {
  // 생성자 함수: 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
  constructor(year, name, window) {
    console.log('부모 생성자 호출');
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메서드1: 집의 나이
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었습니다.`);
  }

  // 메서드2: 집의 창문 개수
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 있습니다.`);
  }
}

// 클래스를 이용해 객체 생성
const house1 = new House(2021, '반포 자이', 10);
console.log(house1); // House { year: 2021, name: '반포 자이', window: 10 }
console.log(typeof house1); // object
console.log(house1.year); // 2021
house1.getAge(); // 반포 자이는 건축한지 2년 되었습니다.
house1.getWindow(); // 반포 자이의 창문은 10개 있습니다.

// house2: 2007년에 지어진 '자이'이며 창문은 10개
const house2 = new House(2007, '자이', 10);
console.log(house2); // House { year: 2007, name: '자이', window: 10 }
console.log('------------------');

// [클래스 상속]
// 부모 클래스: House
// 자식 클래스: Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // super(): 부모 객체에서 상속을 받아옴
    // → 상속한 부모 클래스의 생성자를 호출
    console.log('자식 생성자 호출1');
    super(year, name, window);
    console.log('자식 생성자 호출2');
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name}아파트는 총 층수는 ${this.floor}이며, 창문의 개수는 ${this.window}개 입니다.`;
  }

  // [Overriding]
  // 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 경우 사용
  getWindow() {
    return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, '데미안', 3, 20, 'LG');
console.log(apt1);
// Apartment {
//     year: 2022,
//     name: '데미안',
//     window: 3,
//     floor: 20,
//     windowMaker: 'LG'
//   }
console.log(apt1.getAptInfo()); // 2022에 지어진 데미안아파트는 총 층수는 20이며, 창문의 개수는 3개 입니다.
console.log(apt1.getWindow()); // 데미안아파트의 3개의 창문은 LG회사에서 생산되었습니다.
