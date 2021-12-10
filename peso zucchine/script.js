const arrayZucchine = [];

for (let i = 0; i < 10; i++) {
    const randPeso = Math.random()*5;
    const randLunghezza = Math.random()*10 + 0.5;
    const randVariet = Math.floor(Math.random()*3 + 1);
    let laVarieta = 'non buona';
    if(randVariet == 1){
        laVarieta = 'buona';
    } else if (randVariet == 2) {
        laVarieta = 'terza varieta';
    }
    
    const zucchina = {
        varieta: laVarieta,
        lunghezza: randLunghezza,
        peso: randPeso,
    }
    arrayZucchine.push(zucchina);
}

console.log(arrayZucchine);

let sommaPesi = 0;
for (let i = 0; i < arrayZucchine.length; i++) {
    sommaPesi += arrayZucchine[i].peso;
}

console.log(sommaPesi);