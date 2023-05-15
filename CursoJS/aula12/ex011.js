var idade = 22

if (idade < 16){
    console.log('não vota')
}else if(idade < 18 || idade >= 67) {
    console.log(`Sua idade é ${idade} e seu voto é opcional`)
}else{
    console.log('seu voto é obrigatorio')
}
