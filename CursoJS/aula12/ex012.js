var agora = new Date()
var hr = agora.getHours()

if(hr >= 0 && hr < 6){
    console.log('Boa madrugada')
}else if(hr < 12){
    console.log('bom dia')
}else if(hr < 18){
    console.log('Boa tarde')
}else if(hr < 24){
    console.log('Boa noite')
}else{
    console.log('Esse horario não existe')
}