function pipeFix(numbers){
    let fixed = [];
    let number=numbers[0];
    for(let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
        fixed.push(number);
        number++;   
    }
    return fixed;
}

console.log(pipeFix([6,9]));