const arrayZucchine = [];

for (let i = 0; i < 10; i++) {
    const randPeso = Math.random()*5;
    const randLunghezza = Math.random()*20 + 10;
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

const arrayZucchineMinori15 = [];
const arrayZucchineMaggiori15 = [];

for (let i = 0; i < arrayZucchine.length; i++) {
    if (arrayZucchine[i].lunghezza < 15) {
        arrayZucchineMinori15.push(arrayZucchine[i]);
    } else {
        arrayZucchineMaggiori15.push(arrayZucchine[i]);
    }
}

console.log(arrayZucchineMinori15);
console.log(arrayZucchineMaggiori15);

let sommaMinori15 = 0;
let sommaMaggiori15 = 0;

for (let i = 0; i < arrayZucchineMinori15.length; i ++) {
    sommaMinori15 += arrayZucchineMinori15[i].peso;
}

console.log(sommaMinori15);

for (let i = 0; i < arrayZucchineMaggiori15.length; i ++) {
    sommaMaggiori15 += arrayZucchineMaggiori15[i].peso;
}

console.log(sommaMaggiori15);