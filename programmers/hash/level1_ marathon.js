/**
 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

participant	
["leo", "kiki", "eden"]	
completion	
["eden", "kiki"]
return
"leo"
 */

// 첫번째 답. 효용성에서 틀림. Array로 풀기 쉬워보여서 풀어봤다. 답은 정답이었음.
function solution0(participant, completion) {
    completion.map(v=>{
        participant.splice(participant.indexOf(v),1)
    })
    return participant[0];
}


function solution(participant, completion) {
    
    let obj = {};
    participant.map(v=>{
        obj[v] = obj[v]? obj[v]+1 : 1
    })

    completion.map(v=> {
        obj[v] = obj[v]-1
    })

    for (let key in obj) {
        if (obj[key] !== 0) {
            return key
        }
    }
}


// 고인물들의 코드 난독화....ㅋㅋㅋㅋㅋㅋ  solution1 과 그 아래 solution1 은 동일한 코드이다.
var solution1=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

var solution1 = (participant,completion) => { completion.map(name => completion[name] = (completion[name]|0)+1); 
    return participant.find((name) => !completion[name]--); }; 


function solution2(participant,completion) {
    participant.sort()
    completion.sort()

    for (let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]) {
            return participant[i]
        }
    }    
}

console.log(solution2(["leo", "kiki", "eden"],["eden", "kiki"]));
