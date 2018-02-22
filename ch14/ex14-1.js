// 14.2 변수 선언

// 14.2.1 Let 선언

let age = 22
if (age >= 18) {
    let adult = true;
    console.log(adult); // true 출력
}
// 여기서는 adult에 접근할 수 없습닏
console.log(adult);
//ERROR: Uncaught ReferenceError: adult is not defined



// 14.2.2 상수 선언

const name = "Alex"

name = "Kostas" // 오류 발생
