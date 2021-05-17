/**
 소수 만들기
 문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

입출력 예 #1
nums	[1,2,3,4]
result  1

입출력 예 #1
nums	[1,2,7,6,4]
result  4

*/

// 01 고정 뒤에 쭉
// 02 고정 뒤에 쭉
function solution(nums) {
    const answers = []

    const getPlus = (i, j, k) => {
        nums[k] ? (isPrime(nums[i]+nums[j]+nums[k]),getPlus(i,j,k+1)) : 
        nums[j+1] ? getPlus(i,j+1,j+2) : 
        nums[i+1] ? getPlus(i+1,i+2,i+3) : 0
    }
    
    getPlus(0,1,2)

    return answers.length
}
const isPrime = n => {
    for (let i = 2; i*i <= n; i++){
        if(n%i === 0) {
            return false
        }
    }
    answers.push(n)
}

console.log(solution([1,2,7,6,4]))