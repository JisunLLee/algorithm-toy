/**
 * 백준 문제 인풋 값 받아오기
 * */

// 인풋 값이 하나일 때
function input1() {
    const fs = require("fs")
    const input = fs.readFileSync("/dev/stdin")
}

// 인풋 값이 띄어쓰기로 들어올 때
function inputWithSpacing() {
    const fs = require("fs")
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');

    // 사용 시
    // String : input[0]
    // Number :  parseInt(input[0]); || Number(input[0])
}

// 인풋 값이 줄바꿈으로 들어올 때
function inputWithEnter() {
    const fs = require("fs")
    const input = fs.readFileSync("/dev/stdin").toString().split("\n")

    // 사용 시
    // String : input[0]
    // Number :  parseInt(input[0]); || Number(input[0])
}