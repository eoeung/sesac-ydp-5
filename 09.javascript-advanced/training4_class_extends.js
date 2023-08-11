// [실습 4] 클래스 상속

// 부모 클래스
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// 직사각형
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  // overriding
  getArea() {
    return this.width * this.height;
  }

  getDiagonalLength() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }
}

// 삼각형
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  // overriding
  getArea(){
    return (this.width * this.height) / 2;
  }
}

//원
class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height);
        this.radius = radius;
    }

    // overriding
    getArea(){
        return Math.pow(this.radius, 2) * Math.PI;
        // return `${Math.pow(this.radius, 2)}π`; // 파이를 계산하지 않고 문자열로 보고 싶은 경우
    }
}

// 직사각형
const rectangle = new Rectangle(3, 4);
console.log(rectangle.getArea()); // 12
console.log(rectangle.getDiagonalLength()); // 5

// 삼각형
const triangle = new Triangle(10, 20);
console.log(triangle.getArea()); // 100

// 원
const circle = new Circle(5, 10, 20);
console.log(circle.getArea()); // 1256.6370614359173