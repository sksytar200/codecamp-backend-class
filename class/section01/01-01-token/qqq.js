console.log("안녕")

function getToken(){
    const result= String(Math.floor(Math.random() *1000000 ) ).padStart(6,"0")//0~1 사이의 임의의 숫자 가졎옴
    console.log(result)
}
getToken()