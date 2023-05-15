let hora = new Date()
let paragrafo = document.querySelector('#hr')
let image = document.querySelector('.image')
let corpo = document.body
let manha = document.querySelector('.img_manha')
let tarde = document.querySelector('.img_tarde')
let noite = document.querySelector('.img_noite')
let madrugada = document.querySelector('.img_madrugada')

paragrafo.innerHTML = `Agora são ${hora.getHours()} horas`

if(hora.getHours() >= 0 && hora.getHours() < 6){
    corpo.style.background = '#022859'
    madrugada.style.display = 'Block'
}
else if(hora.getHours() < 12){
    corpo.style.background = '#FACE4B'
    manha.style.display = 'Block'
}
else if(hora.getHours() < 18){
    corpo.style.background = '#734C29'
    tarde.style.display = 'block'
}

else if(hora.getHours() < 24){
    corpo.style.background = '#022873'
    noite.style.display = 'block'
}

else{
    corpo.innerHTML = '<h1 style="text-align:center;"> O horario só vai até 0 horas</h1>'
}
