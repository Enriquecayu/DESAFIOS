function Frutero(fruta){
    let manzanas = fruta/2;
    let sobra = manzanas%3;
    let tartas = (manzanas-sobra)/3;;
    console.log(tartas);
}
Frutero(26);