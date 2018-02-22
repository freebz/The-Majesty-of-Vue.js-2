// 14.4 모듈

import {name} from './module'
console.log('Hello', name)
// "Hello Alex"를 출력



import {name, getAge} from './module'
console.log(name, 'is', getAge())



import person from './module'
console.log( person.name, 'is', person.getAge() )
// "Alex is 22"를 출력
