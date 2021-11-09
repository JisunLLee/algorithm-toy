//1260번 DFS와 BFS

function DFS(v){
    //노드 방문 처리
    visitedDFS[v] = true
    graphDFS.push(v)
    for(let i = 1; i < graph.length; i++) {
        if(graph[v][i] === 1 && visitedDFS[i] === false){
            DFS(i)
        }
    }
}

function BFS(v){
    const Queue = [];
    //시작 노드 큐에 삽입
    Queue.push(v);
    //시작 노드 방문 처리
    graphBFS.push(v);

    //큐에 값이 있을 동안 계속 반복
    while (Queue.length !== 0) {
        const dequeue = Queue.shift();
        visitedBFS[dequeue] = true;
        for(let i = 1; i < graph.length; i++){
            if (graph[dequeue][i] === 1 && visitedBFS[i] === false) {
                visitedBFS[i] = true;
                Queue.push(i);
                graphBFS.push(i)
            }
        }
    }

}

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, }); 
let input = [];
let graph = [];
const graphDFS = [];
const graphBFS = [];
let visitedDFS = [];
let visitedBFS = [];

rl.on("line", function (line) { 
    //여러줄 입력 
    input.push(line); 
}).on("close", function () { 
    answer(input)
    process.exit();
 });

function answer(input) {
    let [n, m, v] = input[0].split(" ").map((el) => parseInt(el)); 
    input = input.slice(1); 
    graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); 
    
    //양방향 그래프로 입력 노드 위치에 1 대입 
    for (let i of input) { 
        let [x, y] = i.split(" ").map((el) => parseInt(el)); 
        graph[x][y] = 1; 
        graph[y][x] = 1; 
    } 
    
    //DFS, BFS 각각 방문 처리를 위해 두개 사용 
    visitedDFS = new Array(n+1).fill(false);
    visitedBFS = new Array(n+1).fill(false);

    DFS(v); 
    BFS(v); 
    //DFS, BFS처리 후 출력 
    console.log(graphDFS.join(" ")); 
    console.log(graphBFS.join(" ")); 
}

answer(["11 10 1", "1 2", "1 3", "1 4", "1 5", "1 6 ","1 7", "1 8", "1 9", "1 10", "1 11"])