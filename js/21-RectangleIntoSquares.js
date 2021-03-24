function sqInRect(lng, wdth){
    if (lng === wdth) return null;
    let squares = [];
    while (wdth !== lng ){
    if(lng > wdth){
        lng = lng - wdth;
        squares.push(wdth);
    } else if(wdth > lng){
        wdth = wdth - lng;
        squares.push(lng);
    }}   
    squares.push(lng);
    return squares;
  }


console.log(sqInRect(5, 5), null);
console.log(sqInRect(5, 3), [3, 2, 1, 1]);
console.log(sqInRect(3, 5), [3, 2, 1, 1]);
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);