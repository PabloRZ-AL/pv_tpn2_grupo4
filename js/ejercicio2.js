const mostrar10NumerosPares = ()=>{
    let acumulador = 1;
    let i = 0
    while(i<10 ){
        if(acumulador%2==0){
            console.log(acumulador)
            i++;
        }
        acumulador++;
    }
}

mostrar10NumerosPares();