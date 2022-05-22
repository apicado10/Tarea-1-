let prom = new Promise(function(resolve, reject){
    let suma = 2 + 6;
    if (suma === 8) {
        resolve("Corecto!");
    }else{
        reject("Error!");
    }
});

prom.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
});