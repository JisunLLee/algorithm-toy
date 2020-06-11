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

function Que2 (input) {
    /**
     * 	최댓값 (2562번)

     문제
     9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

     예를 들어, 서로 다른 9개의 자연수
     3, 29, 38, 12, 57, 74, 40, 85, 61
     이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

     입력
     첫 째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

     출력
     첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

     예제
     input
     3
     29
     38
     12
     57
     74
     40
     85
     61
     return
     85
     8
     * */

        // const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
    let max = parseInt(input)
    let idx = 1
    input.map((value, i) => {
        value = parseInt(value)
        if (max < value) {
            max = value
            idx = i + 1
        }
    })
    console.log(max)
    console.log(idx)
}


// Que1(['5', '20 10 35 30 7'])
Que2([3, 29, 38, 12, 57, 74, 40, 85, 61])