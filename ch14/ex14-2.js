// 14.3 화살표 함수

var increment = value => value + 1;
increment(5) // 6 반환

// 다음 코드와 동일합니다

var increment = function(value) {
    return value + 1;
};



var sum = (a, b) => a + b;
sum(5, 10) // 15를 반환

// 다음 코드와 동일합니다

var sum = function(a, b) {
    return a + b;
};



var sayHiAndBye = () => {
    console.log('Hi!');
    console.log('Bye!');
};
sayHiAndBye()

// 다음 코드와 동일합니다

var sayHiAndBye = function() {
    console.log('Hi!');
    console.log('Bye!');
};
