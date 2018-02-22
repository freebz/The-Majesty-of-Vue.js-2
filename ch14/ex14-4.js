// 14.5 클래스

class Rectangle {
    constructor(height, width) {
	this.height = height;
	this.width = width;
    }

    calcArea() {
	return this.height * this.width;
    }

    // 접근자를 만듭니다. get 키워드를 사용합니다.
    get area() {
	return this.calcArea();
    }
    // 설정자를 만듭니다. set 키워드를 사용합니다
}

// 자식 클래스
class Square extends Rectangle {
    constructor(side) {
	// 부모 생성자 호출
	super(side, side)
    }
}

var square = new Square(5);


console.log(square.area); // 25 출력
