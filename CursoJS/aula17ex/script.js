let n = document.getElementById('txtn')
let selnum = document.getElementById('selnum')
let btn = document.getElementById('btn')
let envia = document.getElementById('envia')
let number = []
btn.addEventListener('click',() => {
    if(n.value.length == 0 || n.value > 100){
        window.alert('Por favor,Digite um numero Valido!')
    }else if(n.value <= 100){
        number.push(n.value)
        if(verifica = true){
              window.alert('Esse Numero ja foi Digitado')
        }else{
            let item = document.createElement('option')
            item.text = [`Número ${number} adicionado`]
            selnum.appendChild(item)} 
        }
})
//verifica Se o numero está no array


