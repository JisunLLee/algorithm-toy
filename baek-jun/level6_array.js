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

function Que3 (input) {
    /**
     * 	숫자의 개수 (2577번)

     문제
     세 개의 자연수 A, B, C가 주어질 때 A×B×C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

     예를 들어 A = 150, B = 266, C = 427 이라면
     A × B × C = 150 × 266 × 427 = 17037300 이 되고,
     계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.

     입력
     첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 같거나 크고, 1,000보다 작은 자연수이다.

     출력
     첫째 줄에는 A×B×C의 결과에 0 이 몇 번 쓰였는지 출력한다. 마찬가지로 둘째 줄부터 열 번째 줄까지 A×B×C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.

     예제
     input
     150
     266
     427
     return
     3
     1
     0
     2
     0
     0
     0
     2
     0
     0
     * */

    // const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
    const multiple = (parseInt(input[0]) * parseInt(input[1]) * parseInt(input[2])).toString().split('').sort()

    let num = 0
    for (num; num < 10; num++){
        let sameNum = 0;
        multiple.map(value => {
            if (parseInt(value) === num) sameNum++
        })
        console.log(sameNum)
    }
}

function Que4 (input) {
/**
 * 	나머지 (3052번)
 *
 * 	문제
 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

 입력
 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

 출력
 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

 예제
 input
 39
 40
 41
 42
 43
 44
 82
 83
 84
 85

 output
 6

 *** input 에 공백 들어옴. .trim() 해줄 것!
 */

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
    let remainders = []
    input.map(value => {
        remainders.push(parseInt(value) % 42)
    })

    //solution1
    console.log(Array.from(new Set(remainders)).length)

    //solution2
    console.log(new Set(remainders).size)

    //solution3
    console.log(remainders.sort().filter((value, index) => value !== remainders[index+1]).length)
}

function Que5 (input) {
    /**
     * 	평 균(1546번)

     문제
     세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다.
     일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
     예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.
     세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 둘째 줄에 세준이의 현재 성적이 주어진다.
     이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.

     출력
     첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.

     예제
     input
     3
     40 80 60

     output
     75.0

     주의:
     input
     2
     1 5 10
     return
     53.33
     */

    /**
     * 메모리 : 7100 KB
     * 시간 : 108ms
     * */

    // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

    const score = input[1].split(' ').map(v => +v)
    const high = Math.max(...score)

    let sum = 0;
    score.map( (value, index) => {
        const newScore = Number(value) / high * 100
        sum += Number(newScore.toFixed(2))
    })
    console.log(sum / score.length)
}
function Que5_1 (input) {
    /**
     * 메모리 : 7116 KB
     * 시간 : 108ms
     * */
    // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
    const length = Number(input[0])
    const score = input[1].split(' ').sort(function (a, b) {
        return b - a
    })
    const high = Number(score[0])

    let sum = 0;
    score.map( (value, index) => {
        const newScore = Number(value) / high * 100
        sum += Number(newScore.toFixed(2))
    })
    console.log(sum / length)
}
function Que5_2 () {
    /**
     * 메모리 : 7108 KB
     * 시간 : 104ms
     * */
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
    const length = +input.shift();
    const score = input.shift().split(' ').map(v => +v)
    const high = Math.max(...score)

    let sum = 0;
    score.map( (value, index) => {
        const newScore = value / high * 100
        sum += Number(newScore.toFixed(2))
    })
    console.log(sum / length)
}
function Que5_3 () {
    /**
     * 메모리 : 7116 KB
     * 시간 : 108ms
     * */
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
    const score = input[1].split(' ').map(v => +v)
    const high = Math.max(...score)

    let sum = 0;
    score.map( (value, index) => {
        const newScore = value / high * 100
        sum += Number(newScore.toFixed(2))
    })
    console.log(sum / score.length)
}

function Que6 (input) {
    /**
     * 	OX 퀴즈 (8958번)

     문제
     "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
     문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

     "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

     OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다.
     문자열은 O와 X만으로 이루어져 있다.

     출력
     각 테스트 케이스마다 점수를 출력한다.

     예제
     input
     5
     OOXXOXXOOO
     OOXXOOXXOO
     OXOXOXOXOXOXOX
     OOOOOOOOOO
     OOOOXOOOOXOOOOX

     output
     10
     9
     7
     55
     30

     */
    // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
    for (let i = 1; i <= Number(input[0]); i++){
        let straight = 0;
        let score = 0;
        input[i].split('').map(value => {
            if (value === "O") straight++
            else straight = 0
            score += straight
        })
        console.log(score)
    }

}


// Que1(['5', '20 10 35 30 7'])
// Que2([3, 29, 38, 12, 57, 74, 40, 85, 61])
// Que3(['150','266','427'])
// Que4(['39', '40', '41', '42', '43', '44', '82', '83', '84', '85'])
// Que5(['3','1 10 5'])
Que6(['5', 'OOXXOXXOOO', 'OOXXOOXXOO', 'OXOXOXOXOXOXOX', 'OOOOOOOOOO', 'OOOOXOOOOXOOOOX'])