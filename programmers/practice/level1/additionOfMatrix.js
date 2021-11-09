/**
 행렬의 덧셈

 문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 
행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

입출력 예
arr1    	[[1,2],[2,3]]
arr2	    [[3,4],[5,6]]
return      [[4,6],[7,9]]
 */

function solution(arr1, arr2) {
    const result = []
    arr1.map((v, i) => {
        const result2 = []
        v.map((value, idx) => {
            result2.push(value + arr2[i][idx])
        })
        result.push(result2)
    })
    return result
}

function solution2(arr1, arr2) {
   return arr1.map((v1, i) => v1.map((v2, j)=> v2 + arr2[i][j]))
}

console.log(solution2([[1,2],[2,3]], [[3,4],[5,6]]))