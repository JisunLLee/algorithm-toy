/**
 직사각형 별 찍기

 문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.

예시
입력    5 3
출력
*****
*****
*****
 */


function solution(data){
    const datas = data.split(" ");
    const n = Number(datas[0]);
    const m = Number(datas[1]);
    const star = '*'.repeat(n)
    for (let i = 1; i <= m; i++)
        console.log(star)
}


process.stdin.setEncoding('utf8'); 
process.stdin.on('data', data => { 
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]); 
    for(let i = 1; i <= b; i ++) {
        let star = '';
        for(let j = 1; j <= a; j++) {
            star += "*"
        }
        console.log(star)
    }
    });

console.log(solution('5 3'))