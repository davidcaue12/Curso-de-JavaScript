function parimp(num){
    if(num % 2 == 0){
        return `Seu Número é ${num} e ele é Par`
    }else{
        return `Seu Número é ${num} e ele é Impar`
    }
}
let res = parimp(10)

console.log(res)