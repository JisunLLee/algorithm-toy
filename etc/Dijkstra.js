//동빈나. 이코테. 다익스트라 알고리즘(최단거리. 특정 노드에서 출발, 다른 노드로 감)

function solution(start, input){
    // 무한의 수 대신 10억
    INF = 1e9;

    //노드 개수
    const N = input.shift();
    //간선 개수
    const M = input.shift();

    // 각 노드에 연결 된 간선 정보 담는 배열
    const graph = Array.from(Array(N+1), () => new Array())
    // 방문한 적 있는지 체크하는 배열
    const visited = Array.from(Array(N+1), () => false);
    // 최단 거리 테이블. 무한으로 초기화
    const distance = Array.from(Array(N+1), ()=> INF);

    //모든 간선 정보 입력
    for(let i = 0; i < M; i++){
      [a, b, c] = input[i].split(' ').map(Number);
      graph[a].push([b , c]);
    }

    // 다익스트라 알고리즘 실행
    dijkstra(INF, N, graph, distance, visited, start);
    console.log('finish')
}

function dijkstra(INF, N, graph, distance, visited, start){
    distance[start] = 0;
    visited[start] = true;

    graph[start].map(v =>{
        distance[v[0]] = v[1];
    })

    // 시작 노드 제외한 전체 n-1 개의 노드에 대해 반복
    for(let i = 0; i < N; i++){
        //현재 최단 거리가 가장 짧은 노드 꺼내서 방문처리
        const now = getSmallestNode(INF, N, distance, visited);
        visited[now] = true;

        // 현재 노드와 연결된 다른 노드 확인
        graph[now].map(v =>{
            let cost = distance[now] + v[1];
            distance[v[0]] = Math.min(cost, distance[v[0]]);
        })
    }

    // 모든 노드 가기 위한 최단 거리 출력
    for(let i = 1; i < N+1; i++){
        distance[i] === INF ? console.log('무한') : console.log(distance[i]);
    }
}

//방문하지 않은 노드 중 가장 짧은 노드 번호 반환
function getSmallestNode(INF, N, distance, visited) {
    min_value = INF;
    index = 0; // 가장 최단거리가 짧은 노드 인덱스
    for(let i = 1; i <= N; i++){
        if(distance[i] < min_value && visited[i] === false){
            min_value = distance[i];
            index = i;
        }
    }
    return index;
}
const start = 1;
const input = [6, 11,
'1 2 2',
'1 4 1',
'1 3 5',
'2 3 3',
'2 4 2',
'3 2 3',
'3 6 5',
'4 3 3',
'4 5 1',
'5 3 1',
'5 6 2'];

solution(start, input);