function solve(arr){
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    if(arr[0] < arr[arr.length-1]){
        return equals([...arr].sort((a,b) => a-b), arr) ? "A" : "RD";
    } 
    if(arr[0] > arr[arr.length-1]){
        return equals([...arr].sort((a,b) => b-a), arr) ? "D" : "RA";
  }
}


console.log(solve([1,2,3,4,5,7]),"A");
console.log(solve([7,1,2,3,4,5]),"RA");
console.log(solve([2,3,4,5,7,12]),"A");
console.log(solve([7,12,1,2,3,4,5]),"RA");
console.log(solve([4,5,6,1,2,3]),"RA");
console.log(solve([9,8,7,6,5]),"D");
console.log(solve([5,9,8,7,6]),"RD");
console.log(solve([6,5,9,8,7]),"RD");
console.log(solve([9,6,7]),"RA");

// const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// equals(a, b); // true