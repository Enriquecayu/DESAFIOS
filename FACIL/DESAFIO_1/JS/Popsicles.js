function Popsicles(hermanos, paletas){
    let resultado = paletas%hermanos==0?"Regalar":"comérselas tú mismo";
    console.log(resultado);
}
Popsicles(3,9);