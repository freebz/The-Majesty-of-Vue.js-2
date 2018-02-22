// 14.7 템플릿 리터럴

// 템플릿 리터럴 - 변수 사용

let name = 'Alex'
console.log(`Hello ${name}`)

// 다음 코드와 동일합니다
console.log('Hello '+ name )



// 템플릿 리터럴 - 함수 사용

add = (a, b) => a + b

let [a, b] = [10, 2]

console.log(`If you have ${a} eggs and you buy ${b}
more you'll have ${add(a,b)} eggs!`);

// 다음 코드와 동일합니다
console.log('If you have ' + a + ' eggs and you buy ' + b +
'\nmore you\'ll have ' + add(a,b) + ' eggs!')



// 템플릿 리터럴 - 표현식 사용

let [a, b] = [10, 2]

console.log(`If you have ${a} eggs and you buy ${b}
more you'll have ${a + b} eggs!`)

// 다음 코드와 동일합니다
console.log('If you have ' + a + ' eggs and you buy ' + b +
	    '\nmore you\'ll have ' + (a + b)*1 + ' eggs!')

