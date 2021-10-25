//2583번 영역 구하기

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, }); 
let input = [];
let dx = [];
let dy = [];
const countArray = [];

rl.on("line", function (line) { 
    //여러줄 입력 
    input.push(line); 
}).on("close", function () { 

    answer(input)
    process.exit(); 
});


function answer(input){
    let [M, N, K] = input[0].split(" ").map((el) => parseInt(el)); 
    input = input.slice(1); 
    graphEmpty = Array.from(Array(M+1), () => Array(N+1).fill(false)); 
    visited = Array.from(Array(M+1), () => Array(N+1).fill(false));
    graph = Array.from(Array(M+1), () => Array(N+1).fill(0)); 
    
    // 해당되는 부분 +1 하기
    for (let i of input) { 
        let [startY, startX, endY, endX] = i.split(" ").map((el) => parseInt(el)); 
        fillArea(startX, startY, endX, endY)    
    } 

    // 색칠하기
    for(let i = 1; i <= M; i++){
        for(let j = 1; j <= N; j++){
            isEmpty(i, j)
        }
    }

    //상하좌우
    dx = [0, 0, -1, 1]
    dy = [1, -1, 0, 0]
    // 노드 돌면서 방문 한 적 없을 때만 DFS 실행
    for(let i = 1; i <= M; i ++) {
        for(let j = 1; j <= N; j++){
            if (!visited[i][j]) countArray.push(DFS(i, j, N, M))
        }
    }
    const result = countArray.filter(zero => zero!==0).sort((a,b)=> a-b)
    console.log(result.length)
    console.log(result.join(" "))

}
function fillArea(startX,startY, endX, endY){
    let startx = startX;
    let starty = startY;
    for(startx; startx <= endX; startx++){
        for(starty; starty <= endY; starty++){
            graph[startx][starty] = 1
        }
        starty = startY
    }
}

function isEmpty(x,y){
    const a = graph[x-1][y-1]
    const b = graph[x-1][y]
    const c = graph[x][y-1]
    const d = graph[x][y]

    if (a+b+c+d <= 3) graphEmpty[x][y] = true
}

function DFS(i, j, N, M){

    // 노드 방문 처리
    let num = 0
    visited[i][j] = true
    if (graphEmpty[i][j]) num += 1
    const stack = [];
    stack.push(i);
    stack.push(j);
    while( stack.length !== 0 ) {
        let x = stack.pop();
        let y = stack.pop();
        for (let k = 0; k < dx.length; k++){
            const nx = x + dx[k];
            const ny = y + dy[k];   
            
            if (ny >= 1 && nx >= 1 && nx <= N && ny <= M) {
                if (graphEmpty[ny][nx] && !visited[ny][nx]){
        
                    stack.push(ny);
                    stack.push(nx);
                    visited[ny][nx] = true
                    num++
                }
            }
        }
    }
        return num;
}
// answer(["5 7 3", "0 2 4 4", "1 1 2 5", "4 0 6 2"])
// answer(["100 100 0", "0 0 1 1"])
answer(["100 100 1", "0 0 1 1"])