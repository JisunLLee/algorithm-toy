//https://www.youtube.com/watch?v=aOhhNFTIeFI&t=1732s
// 서로소 집합 자료구조 문제풀이.

function solution(input){
    const node = input.shift(); //노드
    const e = input.shift();    //간선

    //부모테이블
    const parent = [];

    //부모 테이블 상에서 부모를 자기 자신으로 초기화
    for(let i = 1; i <= node; i++){
        parent[i] = i;
    }

    //union 연산 각각 실행
    for(let i = 0; i < e; i++){
        [a, b] = input[i].split(' ');
        unionParent(parent, a, b);
        console.log('parent: ', parent, 'a: ', a, 'b: ', b)
    }

    console.log('각 원소가 속한 집합 : ');
    for(let i = 1; i <= node; i++){
        console.log(findParent(parent, i))
    }

    console.log('부모 테이블 : ');
    for(let i = 1; i <= node; i++){
        console.log(parent[i])
    } 
}

// 특정 원소가 속한 집합 찾기
function findParent(parent, x){
    if(parent[x] !== x) {
        return findParent(parent, parent[x]);
    }
    return x;
}

function unionParent(parent, a, b){
    const A = findParent(parent, a);
    const B = findParent(parent, b);

    if( A < B ) parent[B] = A;
    else parent[A] = B;
}
const input = [6, 4, 
    '1 4', 
    '2 3',
    '2 4',
    '5 6']

solution(input)