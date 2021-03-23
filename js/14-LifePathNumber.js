
function lifePathNumber(dateOfBirth) {
    let lifenum = 0;
    let vienoArrSum =0;
    const dateArray = dateOfBirth.split("-");
    
    for (let i = 0; i < dateArray.length; i++){
    const elem = dateArray[i];
    vienoArrSum= vienoSUM(elem);
    
    lifenum += vienoArrSum;
    while (lifenum >= 10){
        lifenum = vienoSUM(lifenum);
    }
    }
    return lifenum ;
  }


  function vienoSUM(skaicius){
    const antrasString = `${skaicius}`.split('');
    let vienoArrSum = 0;
    for (let s = 0; s < antrasString.length; s++){
            vienoArrSum += parseInt(antrasString[s]);
            }
    
    return vienoArrSum;
  }
 

  console.log(lifePathNumber("1879-03-14"),'-->', 6);
console.log(lifePathNumber("1815-12-10"),'-->', 1);
console.log(lifePathNumber("1961-07-04"),'-->', 1);
console.log(lifePathNumber("1955-10-28"),'-->', 4) ;
//   console.log(lifePathNumber("1452-04-15"),'-->', 4) ;

//   function sumDigitsRecursively(n) {
//     let sum = sumDigits(n);
//     if (sum < 10)
//         return sum;
//     else
//         return sumDigitsRecursively(sum);
// }
// console.log(sumDigitsRecursively("1452"),'-->', 12) ;