function arrayFusion (array1, array2) {
    if (array1.length == array2.length) {
        const newArray = [];
        for (let i = 0; i < 2*array1.length; i++) {
            if (!(i % 2)) {
                newArray.push(array1[i / 2]);
            } else {
                newArray.push(array2[(i - 1 ) / 2]);
            }
        }
        return newArray; 
    } else {
        return "invalid arrays";
    }
}

function arrayFusionSemplicemente (array1, array2){
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    return newArray;
}

console.log(arrayFusionSemplicemente(['a','b','c'], [1 ,2 ,3]), "semplice");
console.log(arrayFusion(['a','b','c'], [1 ,2 ,3]), "non semplice");