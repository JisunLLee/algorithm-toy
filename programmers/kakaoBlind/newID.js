// 프로그래머스 카카오 블라인드 > 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

// 3자 이상 15자 이하
// 소문자 숫자 - _ . 만 사용 가능
// .(마침표)는 처음과 끝에 사용 불가. 연속으로 사용 불가
function solution(new_id){

    //맞으면 그냥 넘어감


    // 대문자가 있으면 소문자로 치환
    new_id = new_id.toLowerCase();
    // 소문자, 숫자, -, _, . 제외한 모든 문자 제거
    new_id = new_id.match(/[a-z0-9-_.]*/g, '').join('');
    // .가 2번 연속이면 마침표 하나로 치환
    new_id = new_id.replace(/[.]{2,}/g,'.');
    // 처음과 끝에 . 제거
    new_id = new_id.replace(/^[.]|[.]$/,'');
    // 빈 문자열이면 aaa
    new_id === '' ? new_id = 'aaa' : '';
    // 15자 이상이면 15자 이후 제거
    new_id = new_id.match(/.{0,15}/, '').join('');
    // 끝에 . 있는지 또 확인
    new_id = new_id.replace(/[.]$/,'');
    // 2자 이하면 new_id 마지막 문자를 길이가 3 되기 전까지 반복적으로 붙임
    if (new_id.length < 3){
        if(new_id.length < 2) new_id += new_id
        new_id = new_id + new_id[1]
    }

    return new_id
}

function solution2(new_id){

    // 대문자가 있으면 소문자로 치환
    new_id = new_id.toLowerCase()
    // 소문자, 숫자, -, _, . 제외한 모든 문자 제거
    .match(/[a-z0-9-_.]*/g, '').join('')
    // .가 2번 연속이면 마침표 하나로 치환
    .replace(/[.]{2,}/g,'.')
    // 처음과 끝에 . 제거
    .replace(/^[.]|[.]$/,'')
    // 빈 문자열이면 a
    .padEnd(1, 'a')
    // 15자 이상이면 15자 이후 제거
    .match(/.{0,15}/, '').join('')
    // 끝에 . 있는지 또 확인
    .replace(/[.]$/,'');
    // 2자 이하면 new_id 마지막 문자를 길이가 3 되기 전까지 반복적으로 붙임

    return new_id.padEnd(3, new_id[new_id.length-1])
}


const new_id = '123_.def'
console.log(solution2(new_id))