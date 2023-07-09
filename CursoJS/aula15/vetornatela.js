let valor = [1,4,2,5,6,7,4,2,4,7,8,]

// for(let pos = 0;pos < valor.length;pos++){
//     valor.sort()
//     console.log(`A posição ${pos},tem o valor ${valor[pos]}`)
// }

for(let pos in valor){
    console.log(`A posição ${pos},tem o valor ${valor[pos]}`)
}