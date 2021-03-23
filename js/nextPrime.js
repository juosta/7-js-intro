// Function to find next prime number
 
function nextPrime(N) 
{ 
    if (N <= 1) 
        return 2; 
 
    let prime = N; 
    let found = false; 
    while (!found) { 
        prime++; 
        if (prime <= 1) continue; 
        if (prime <= 3) found = true; 

        if (prime%2 == 0 || prime%3 == 0) continue; 
        
        found = true;
        for (let i=5; i*i<=prime; i=i+6) 
            if (prime%i == 0 || prime%(i+2) == 0) {
                found = false;
            }
    } 
    return prime; 
} 
console.log(nextPrime(7),11);
console.log(nextPrime(0), 2);
console.log(nextPrime(1), 2);
console.log(nextPrime(2), 3);
console.log(nextPrime(3), 5);
console.log(nextPrime(4), 5);
console.log(nextPrime(5), 7);
console.log(nextPrime(11), 13);
console.log(nextPrime(17), 19);
console.log(nextPrime(2971), 2999);