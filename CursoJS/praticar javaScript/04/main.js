const email = document.getElementById('email')
const senha = document.getElementById('senha')
const btn = document.getElementById('btn')
let pessoa = []
let pass = []

btn.addEventListener('click',() => {
    pessoa.push(email.value)
    
    pass.push(senha.value)
    console.log(pessoa,pass)
})





