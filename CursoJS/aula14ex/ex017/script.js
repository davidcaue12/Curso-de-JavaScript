function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.length == 0){
        window.alert('Porfavor digite um numero')
    }else{
        tab.innerHTML = ' '
        let n = Number(num.value)

        for(let c = 1;c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}