/**
 체육복

문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
 
입출력 예 #1
n   5	
lost    [2,4]	
reserve	[1,3,5]
return  5

입출력 예 #2
n   5	
lost    [2,4]	
reserve	[3]
return  4

입출력 예 #1
n   3	
lost    [3]	
reserve	[1]
return  2
*/

function solution(n, lost, reserve) {

    // 옷 잃어버린 사람 복제본 (한벌 잃어버렸지만, 한벌 더 있을 수 있음)
    let noCloth = lost.slice()
    // 옷 잃어버린 사람 중 두벌 있던 사람 색출. 
    lost.map((v,i)=> {
        if(reserve.find(value=> value === v)){
            // 옷 잃어버린 사람 복제본에서 제외
            noCloth.splice(noCloth.indexOf(v),1)
            // 여별 있는 사람에서 제외
            reserve.splice(reserve.indexOf(v),1)
        }
    })
    // 옷 없는 사람 복제본
    let noCloth2 = noCloth.slice()
    noCloth.map((v,i)=> {
        for (let j = 0; j < reserve.length; j++){
            let a = reserve[j] - v
            // 여벌과 한 사이즈만 차이 나는 옷 찾기
            if ( -1 === reserve[j] - v || reserve[j] - v  === 1) {
                // 진짜 옷 없는 사람 목록에서 제외 (옷 없는 사람 복제본)
                noCloth2.splice(noCloth2.indexOf(v),1);
                // 여벌 있는 사람 제외
                reserve.splice(j,1);
            }
        }
    })
    return n - noCloth2.length
}

console.log(solution(5, [2,4], [1,3,5]))    // 5
console.log(solution(5, [5,4,2], [2,4]))    // 4
console.log(solution(5, [2,4], [3]))        // 4
console.log(solution(5, [1,2], [2,3]))      // 4