function decompose(n) {
    let n_squares = [];
    let square = n**2;
    let nextSquare = 0;
    if( (n-1)**2 <square){
        square -= (n-1)**2;
        n_squares.push((n-1));
    } 
    
    //while(square > 2 ){
    nextSquare= smallSquare(square);
        n_squares.push(nextSquare[0]);
        square -= nextSquare[1];
    //}
    return n_squares, nextSquare;
}

function smallSquare(n) {
    let nextSquare = 0;
    let root = 0;
    if( (n-1)**2 <n){
        nextSquare -= (n-1)**2;
        root = (n-1);
    } else {
    for (let i =n-1; i > 0; i--){
    //while(!(i**2 === square || i**2 ===2)){
        
        if( i**2 < n){
            n -= nextSquare;
            root = (i);
            break;
        }
        }
    }
    return [n, root];
}

console.log(decompose(50), [1,3,5,8,49]);
    // console.log(decompose(12), [1,2,3,7,9]);
    // console.log(decompose(44), [2,3,5,7,43]);
    // console.log(decompose(625), [2,5,8,34,624]);
    // console.log(decompose(5), [3,4]);