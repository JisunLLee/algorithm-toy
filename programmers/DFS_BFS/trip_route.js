//여행경로

let answer = [];
let visited = [];

function solution(tickets) {

    visited = new Array(tickets.length).fill(false);


    const array = tickets.sort();
    dfs(array, "ICN", [], 0)
    return answer;
}


function dfs(tickets, start, result, count){

    
    result.push(start);
    if(count === tickets.length) {
        answer = result;
        return true;
      }

    for(let i =0; i < tickets.length; i++){
        if(start === tickets[i][0] && !visited[i]){
            visited[i] = true;
            if(dfs(tickets, tickets[i][1], result, count+1)) return true;

            visited[i] = false;
        
        }
    }
    result.pop();
    return false;
}



const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]
console.log(solution(tickets))