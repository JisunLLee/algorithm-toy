// 1. 0 갯수 찾기
// 1-1 0이 6개면 [1,6]
// 2. win_nums와 lottos 대조 -> 공통 된 숫자 제거
// 3. 공통된 숫자 제거 +1 이 최소, 공통된 숫자 + 1 - 0의 갯수 가 최대
// 3-1 공통된 숫자 제거한 값이 6이면 그대로 6.


function solution(lottos, win_nums) {
    
    const damaged = lottos.filter(num => num === 0).length

    if (damaged === 6){
        return [1,6]
    }

    lottos.map(v=> {
        win_nums.find(value => value === v) ? win_nums.splice(win_nums.indexOf(v),1) : 0
    }) 

    if (win_nums.length === 6)
        return [ 6 - damaged, 6] 

    return [win_nums.length + 1 - damaged, win_nums.length + 1] 
}


// console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35]))