function numbersOfLetters(integer) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numberword='';
    let length = 0;
    let array = [];
    let c = `${integer}`.length;
    if(typeof integer === 'number'){
        for(let i =0; i < `${integer}`.length; i++){
            numberword += words[`${integer}`[i]];
        }
    } else {
        numberword = integer;      
    }
    array.push(numberword);

    
    while(array[array.length-1] !== "four"){
    length = numberword.length;
    if (length >= 10){
        numberword =numbersOfLetters(length);
        array.push(...numberword);
    } else {
        numberword = words[length]
        array.push(numberword);
    }
    }
    console.log(c);

    return array;
  }

//   function numToLet (num){
//     const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let numW ='';
//     if(typeof num === 'number'){
//         for(let i =0; i < `${num}`.length; i++){
//             numW += words[`${num}`[i]];
//         }
//     } else {
//         numW = num;      
//     }
//     return numW;
//   }

console.log(numbersOfLetters(1), ["one", "three", "five", "four"]);
console.log(numbersOfLetters(4), "four");
console.log(numbersOfLetters(12), ["onetwo", "six", "three", "five", "four"]);
console.log(numbersOfLetters(37), ["threeseven", "onezero", "seven", "five", "four"]);
console.log(numbersOfLetters(311), ["threeoneone", "oneone", "six", "three", "five", "four"]);
console.log(numbersOfLetters(999), ["nineninenine", "onetwo", "six", "three", "five", "four"]);
