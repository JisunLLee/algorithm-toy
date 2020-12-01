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

    const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
    const input2 = require("fs").readFileSync("/dev/stdin").trim().split("\n");
    const input3 = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    // 사용 시
    // String : input[0]
    // Number :  parseInt(input[0]); || Number(input[0])
}

// 리드라인으로 줄바꿈 값 받기
function inputWithReadline() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = [];

    rl.on('line', function (line) {
        input.push(line);
    }).on('close', function () {

        // 하고싶은 행동

        process.exit();
    });
    // 사용 시
    // String : input[0]
    // Number :  parseInt(input[0]); || Number(input[0])
}