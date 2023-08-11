// [실습 3] Shape 클래스 만들기

// 클래스는 객체
class Shape {
  // 생성자 함수
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 객체 메서드
  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); // 12