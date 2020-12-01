/**
 * Level8 문자열
 * 총 10문제.
 */

function Que1() {

    /**
     * 아스키코드 (11654번)

     문제
     알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

     입력
     알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

     출력
     입력으로 주어진 글자의 아스키 코드 값을 출력한다.

     예제 1
     input A
     return 65

     예제 2
     input B
     return 67

     예제 3
     input 0
     return 48

     예제 4
     input 9
     return 57

     예제 5
     input a
     return 97

     예제 6
     input z
     return 122

     * */

    /**
     * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
     *   "문자열".charCodeAt([문자열 자릿수]); 사용.
    * */
    const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    console.log(input[0].charCodeAt(0))
}
function Que2(input) {

    /**
     * 숫자의 합 (11720번)

     문제
     N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

     출력
     입력으로 주어진 숫자 N개의 합을 출력한다.

     예제 1
     input
     1
     1
     return 1

     예제 2
     input
     5
     54321
     return 15

     예제 3
     input
     25
     7000000000000000000000000
     return 7

     예제 4
     input
     11
     10987654321
     return 46

     * */

    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    let sum = 0;
    input[1].toString().split('').map(v=>+v).map(value => sum = sum+value)
    console.log(sum)
}
function Que3(S) {

    /**
     * 알파벳 찾기 (10809번)

     문제
     알파벳 소문자로만 이루어진 단어 S가 주어진다.
     각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.

     출력
     각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.
     만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.

     예제 1
     input baekjoon
     return 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

     * */

    // const S = require("fs").readFileSync("/dev/stdin").toString().trim();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let setup = {}
    alphabet.split('').map((value, index) => {
        setup[value] = {idx: index, data: -1}
    })

    S.split('').map((value, index) => {
        if (index === 0) setup[value]['data'] = 0
        if (setup[value]['data'] === -1) {
            setup[value]['data'] = index
        }
    })

    let answer = ''
    for (const [key, value] of Object.entries(setup)) {
        if (answer !== '') answer = answer + " " +value['data']
        else  answer = answer + value['data']
    }
    console.log(answer)
}


function Que4(input) {
    /**
     * 문자열 반복 (2675번)

     문제
     문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.
     즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

     QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

     입력
     첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다.

     출력
     각 테스트 케이스에 대해 P를 출력한다.

     예제
     input
     2
     3 ABC
     5 /HTP

     output
     AAABBBCCC
     /////HHHHHTTTTTPPPPP
     * */


    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    input.shift()
    input.map(value => {
        const data = value.split(' ')
        const S = data[1]
        const R = Number(data[0])

        const array_r = S.toString().trim().split("")
        let answer= ""
        array_r.map(value => {
            let i = 1;
            while (i <= R){
                answer += value
                i++
            }
        })
        console.log(answer)

    })

}

function Que5(input) {

    /**
     * 단어공부 (1157번)

     문제
     알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

     입력
     첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

     출력
     첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

     예제1
     input Mississipi
     output ?

     예제2
     input zZa
     output Z

     예제3
     input z
     output Z

     예제3
     input baaa
     output A
     * */

    //모두 대문자로 바꿔주고
    input = input.trim().toUpperCase()
    input = input.split("")

    // .... 인풋이.... const 였다는 사실을 잊지마라.. .toUpperCase().split(""); 한번에 넣어주면 런타임 에러 안뜨고
    // input = input.trim().toUpperCase()
    // input = input.split("") 요렇게 하면 런타임 에러 뜬다...


    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().toUpperCase().split("");
    const alphabet_obj = {}

    input.forEach(value => {
        alphabet_obj[value] = alphabet_obj[value]? alphabet_obj[value] + 1 : 1
    })
    const alphabet_list = Object.entries(alphabet_obj);
    alphabet_list.sort((a, b) => { return b[1] - a[1]})
    if (alphabet_list.length ===1 ) console.log(alphabet_list[0][0])
    else if (alphabet_list[0][1] === alphabet_list[1][1]) console.log("?")
    else console.log(alphabet_list[0][0])
}

function Que6(input) {

    /**
     * 단어의 개수 (1152번)

     문제
     영어 대소문자와 띄어쓰기만으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오.
     단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

     입력
     첫 줄에 영어 대소문자와 띄어쓰기로 이루어진 문자열이 주어진다.
     이 문자열의 길이는 1,000,000을 넘지 않는다. 단어는 띄어쓰기 한 개로 구분되며,
     공백이 연속해서 나오는 경우는 없다. 또한 문자열의 앞과 뒤에는 공백이 있을 수도 있다.

     출력
     첫째 줄에 단어의 개수를 출력한다.

     예제1
     input The Curious Case of Benjamin Button
     output 6

     예제2
     input  Mazatneunde Wae Teullyeoyo
     output 3

     예제3
     input Teullinika Teullyeotzi
     output 2

     * */

    // const list = input.split(" ")
    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

    //첫번째 답
    // const answer = input.filter(function(item) {
    //     return item !== null && item !== undefined && item !== '';
    // });
    // console.log(answer.length)

    // 두번째 답
    // if(!input[0]) input.shift()
    // if(!input[input.length-1]) input.pop()
    // console.log(input.length)

    // 세번째 답
    // 삼항 조건 연산자 "?" 사용. "?" 앞의 조건이 true 면 "?" 뒤가 실행 되고, "?" 앞의 조건이 false 면 ":" 뒤가 실행된다.
    input[0] === '' ? console.log(0) : console.log(input.length)


}

function Que7(input) {
    /**
     * 상수 (2908번)
     *
     * 문제
     상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다.
     이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다.
     상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.

     상수는 수를 다른 사람과 다르게 거꾸로 읽는다.
     예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다.
     따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.

     두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.

     출력
     첫째 줄에 상수의 대답을 출력한다.

     예제
     input 734 893
     output 437
     **/
    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

    // 첫번째 답변
    // let backwards_array = [];
    // input.map(value => {
    //     let backwards = ""
    //     const data = value.split("")
    //     for(let i = data.length; i >= 1; i--){
    //         backwards = backwards + data[i-1]
    //     }
    //     backwards_array.push(Number(backwards))
    // })
    // console.log(Math.max.apply(null, backwards_array))

    // 두번째 답변 신기하게 이게 더 오래 걸림
    let backwards = []
    input.map(value => {
        backwards.push(Number(value.split('').reverse().join('')))
    })
    console.log(Math.max.apply(null, backwards))
}

function Que8(input) {
    /**
     * 다이얼 (5622번)
     *
     * 문제
     상근이의 할머니는 아래 그림과 같이 오래된 다이얼 전화기를 사용한다.

     전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다.
     숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.

     숫자 1을 걸려면 총 2초가 필요하다. 1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다.

     상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다. 즉, 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 된다.
     예를 들어, UNUCIC는 868242와 같다.

     할머니가 외운 단어가 주어졌을 때, 이 전화를 걸기 위해서 필요한 시간을 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 알파벳 대문자로 이루어진 단어가 주어진다. 단어는 2글자~15글자로 이루어져 있다.

     출력
     첫째 줄에 다이얼을 걸기 위해서 필요한 시간을 출력한다.

     예제
     input UNUCIC
     output 36
     **/

    // trim() 을 꼭!! 걸어라! 아님 input.pop() 이라도.


    //첫번째 답
    // // const input = require("fs").readFileSyncz("/dev/stdin").trim().toString().split("");
    // const dials = {
    //     1 : 1,
    //     A : 2,
    //     B : 2,
    //     C : 2,
    //     D : 3,
    //     E : 3,
    //     F : 3,
    //     G : 4,
    //     H : 4,
    //     I : 4,
    //     J : 5,
    //     K : 5,
    //     L : 5,
    //     M : 6,
    //     N : 6,
    //     O : 6,
    //     P : 7,
    //     Q : 7,
    //     R : 7,
    //     S : 7,
    //     T : 8,
    //     U : 8,
    //     V : 8,
    //     W : 9,
    //     X : 9,
    //     Y : 9,
    //     Z : 9
    // }
    // let result = 0
    // input.map(value => {
    //     result = result + (dials[value] + 1)
    // })
    //
    // console.log(result)

    // 두번째 답 <- 런타임에러로 제출 실패. 그러나 답은 나옴.
    // const input = require("fs").readFileSyncz("/dev/stdin").trim().toString();
    const dial = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]
    let answer = 0;

    for (let i = 0; i < input.length; i++) {
        answer += dial[input.charCodeAt(i)-65]
    }
    console.log(answer)
}

function Que9(input) {
    /**
     * 크로아티아 알파 (2941번)
     *
     * 문제
     크로아티아 알파벳	변경
     č	            c=
     ć	            c-
     dž	            dz=
     đ	            d-
     lj	            lj
     nj	            nj
     š	            s=
     ž	            z=
     예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다.
     단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

     dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다.
     위 목록에 없는 알파벳은 한 글자씩 센다.

     입력
     첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 '-', '='로만 이루어져 있다.
     단어는 크로아티아 알파벳으로 이루어져 있다. 문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다.

     출력
     입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

     예제 1
     input ljes=njak
     output 6

     예제 2
     input ddz=z=
     output 3

     예제 3
     input nljj
     output 3

     예제 4
     input c=c=
     output 2
     **/
    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

    // // 답 1 런타임에러.
    // const croatia = [
    //     'c=','c-','dz=','d-','lj','nj','s=','z='
    //     ]
    // let count = 0;
    //
    // input.map((value, index) => {
    //     const compare = value + input[index+1]
    //     if (compare === croatia[0]
    //         || compare === croatia[1]
    //         || compare === croatia[2]
    //         || compare === croatia[3]
    //         || compare === croatia[4]
    //         || compare === croatia[5]
    //         || compare === croatia[6]
    //         || compare === croatia[7]
    //     ) count = count
    //     else if (compare === 'dz') {
    //         if ( compare+input[index+2] === '=')
    //         count --
    //     }
    //     else count++
    // })
    // console.log(count)

    // 답 2
    const regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
    const result = input.replace(regex, ' ')
    console.log(result.length)

}

function Que10(input) {
    /**
     * 그룹 단어 체커 (1316번)
     *
     * 문제
     그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다.
     예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
     aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

     단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다.
     단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

     출력
     첫째 줄에 그룹 단어의 개수를 출력한다.

     예제 1
     input
     3
     happy
     new
     year

     output
     3

     예제 2
     input
     4
     aba
     abab
     abcabc
     a

     output
     1
     **/
    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    // 아이디어. 앞에거랑 다르면 추가. 마지막 나온 목록 랭스 가지고 있기. 중복 지운 랭스랑 마지막 랭스랑 비교해서 숫자가 다르면 카운트 +0, 같으면 카운트 +1
    let count = 0
    input.shift();

    input.map(value => {
        let last_word = ''
        const data = value.split('')
        let result_data = []
        data.map((v, i) =>{
            if(v !== last_word) result_data.push(v)
            last_word = v
        })
        if (result_data.length === Array.from(new Set(result_data)).length) count++
    })
    console.log(count)

}
// Que1("9")
// Que2(['25', '10987654321'])
// Que3('baekjoon')
// Que4([2,'3 ABC', '5 /HTP'])
// Que5('a')
// Que6(["", "The", "Curious", "Case", "sd", ""])
// Que6([""])
// Que7(["993", "893"])
// Que8('UNUCIC')
// Que8(['U','N','U','C','I','C'])
// Que8(['A','K'])
// Que8('UUU')
// Que8('UNUCIC')
// Que8(['A','B','C','B'])
// Que9(['l','j','e','s','n','j','a','k'])
// Que9(['c','='])
// Que9(['l','j','e','s','=','n','j','a','k'])
// Que9(['d','d','z','=','z','='])
// Que9('ddz=z=')
// Que10(['3','happy','new','year'])
// Que10(['4', 'aba', 'abab', 'abcabc', 'a'])
// Que10 (['1','aaa'])