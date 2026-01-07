function Conversor(pesos,dolares){
    let totalP = pesos*0.02;
    if(totalP>dolares){
        console.log("Dolares");
    }else{
        console.log("Pesos");
    }
}
Conversor(1000,10);
Conversor(4000,80);