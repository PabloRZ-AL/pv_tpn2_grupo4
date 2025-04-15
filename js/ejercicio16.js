const sumarRangos = (n1,n2) =>{
    if(n1>n2){
        return "El numero inicial no puede ser mayor que el numero final";
    }

    let suma = 0;
    for(let i=n1; i<=n2; i++){
        suma = suma + i;
    }

    return suma;
}

console.log(sumarRangos(1,10));