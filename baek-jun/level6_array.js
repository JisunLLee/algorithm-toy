/**
 * Level6 1차원 배열
 * 총 7문제.
 * (level5 는 실습문제 + 사이트 내 수정 중이라 패스)
 */

function Que1 (input) {
    /**
     * 	최소, 최대 (10818번)

     문제
     N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

     출력
     첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

     예제
     input
     5
     20 10 35 30 7
     return
     7 35
     * */

    // const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
    const array = input[1].split(' ')

    let min = parseInt(array[0])
    let max = parseInt(array[0])

    array.map(value => {
        value = parseInt(value)
        if (min > value) min = value
        if (max < value) max = value
    })
    console.log(`${min} ${max}`)
}

Que1(['5', '20 10 35 30 7'])