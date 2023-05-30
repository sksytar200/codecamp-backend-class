// //안좋은 예
// function createTokenOfPhone(num){
//     // 1. 핸드폰 번호 자릿수 맞는지 확인하기 10~11자리
//     if(num.length>=10){
//         if(num.length<=11){
//             // 2. 핸드폰 토큰 6자리 만들기
//             const result= String(Math.floor(Math.random() *1000000 ) ).padStart(6,"0")//0~1 사이의 임의의 숫자 가졎옴
//             console.log(result)


//             // 3. 핸드폰 번호에 토큰 전송하기
//             console.log(num + "번호로 인증번호" + result + "를 전송합니다.")


//         } else{
//             console.log("핸드폰 번호를 다시 확인해 주세요")

//         }
//     }else{
//         console.log("핸드폰 번호를 다시 확인해 주세요")

//     }


// }


//좋은 예
function createTokenOfPhone(num){
    // 1. 핸드폰 번호 자릿수 맞는지 확인하기 10~11자리
    if(num.length>=10){
        if(num.length<10 || num.length >11){  //early-exit 에러먼저 찾아서 일직 종료시키게 작성
            console.log("핸드폰번호를 다시 확인해 주세요")
            return
        }
        // 2. 핸드폰 토큰 6자리 만들기
        const result= String(Math.floor(Math.random() *1000000 ) ).padStart(6,"0")//0~1 사이의 임의의 숫자 가졎옴
        console.log(result)

        // 3. 핸드폰 번호에 토큰 전송하기
        console.log(num + "번호로 인증번호" + result + "를 전송합니다.")
    }
}
createTokenOfPhone("01012345678")
