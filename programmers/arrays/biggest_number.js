/**
    개요
 문제 설명

 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

 제한 사항

 * numbers의 길이는 1 이상 100,000 이하입니다.
 * numbers의 원소는 0 이상 1,000 이하입니다.
 * 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

 입출력 예

 * numbers : [6, 10, 2]
 * return : 6210
 *
 * numbers : [3, 30, 34, 5, 9]
 * return : 9534330

 */

function solution(numbers){
    let array = []

    // let idx = 0
    const length = numbers.length
    // numbers.map((value, idx) => {
    //     let num = [];
    //     for (let count = 0; count < length; count++){
    //         num.push(numbers[count-idx]);
    //     }
    //     return array.push(num.join(''))
    // })

    for (value of numbers){

    }

        //0,1,2,3
        //1,2,3,0
        //2,3,0,1
        //3,0,1,2
    //
    // array.push(numbers[0].toString() + numbers[1].toString() + numbers[2].toString())
    // array.push(numbers[1].toString() + numbers[2].toString() + numbers[0].toString())
    // array.push(numbers[2].toString() + numbers[0].toString() + numbers[1].toString())


    // num = [6102, 6210, 1062, 1026, 2610, 2106]
    // sort > num(0);

    return array;
}


const numbers = [6,10,2]
// console.log(contents.indexOf(content));
// console.time('solution');
// console.log(solution(numbers));
// console.timeEnd("solution");