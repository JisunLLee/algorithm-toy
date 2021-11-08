//동빈나 플로이드 워셜. 

function solution(input){

    let INF = 1e9; //10억. 무한 대신 10억 사용.

    // 노드 개수
    const N = input.shift();
    // 간선 개수
    const M = input.shift();


    // 2차원 배열 10억으로 초기화
    const graph = Array.from(Array(N+1), () => Array(N+1).fill(INF));

    // 자기 자신으로 가는 비용은 0으로 초기화
    for(let i = 1; i <= N; i++){
        for(let j = 1; j <= N; j++){
            if(i === j) graph[i][j] = 0;
        }
    }

    console.log(graph)
    //각 간선에 대한 정보 받아 그 값으로 초기화
    for(let i = 0; i < M; i++){
        [a, b, c] = input[i].split(' ');
        graph[a][b] = c;
    }

    //플로이드 워셜 알고리즘 실행
    for(let k = 1; k <= N; k++){
        for(let a = 1; a <= N; a++){
            for(let b = 1; b <= N; b++){
                graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
            }
        }
    }

    for(let a = 1; a <= N; a++){
        for(let b = 1; b <= N; b++){
            graph[a][b] === INF ? console.log('무한') : console.log(graph[a][b])
        }
    }
    
}




const input = [ 4, 7, 
'1 2 4',
'1 4 6',
'2 1 3',
'2 3 7',
'3 1 5',
'3 4 4',
'4 3 2'];

solution(input);