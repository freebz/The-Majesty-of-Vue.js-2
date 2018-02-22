// 14.6 기본 매개변수 값

function divide(x, y = 2) {
    return x/y;
}

// 다음 코드와 동일합니다

function divide(x, y) {
    y = y == undefined ? 2 : y;
    return x/y;
}
