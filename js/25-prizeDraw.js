function rank(st, we, n) {
    const a="0abcdefghijklmnopqrstuvwxyz";
    const stArr = st.toLowerCase().split(',');
    const stSplit = st.split(',');
    
    if (st.length === 0) return "No participants";
    if (n > stArr.length) return "Not enough participants";

    let ranks = [];
    for (let i = 0; i <stArr.length ; i++){
        let som = stArr[i].length;
        for( let j =0; j < stArr[i].length; j ++){
            som += a.indexOf(stArr[i][j]);
        }
        let winNum = som * we[i];
        ranks.push([stSplit[i], winNum]);
    }
    ranks.sort(function(a, b) { 
        return dsc(a[1],b[1]) || asc(a[0],b[0])
    })     
    return ranks[n-1][0];
}
dsc = function(a, b) {
    if (a > b) return -1;
    if (a < b) return +1;
    return 0; 
}
asc = function(a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
}

 console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin");
     console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon");
     console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants");
     console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants");
    console.log(rank("Naoh,Sofia,Madison,Liam,David,Samantha,Grace,Daniel,Robert,Elizabeth,Isabella,Mason,Emma,Emily,Jayden,Lyli,Andrew,Abigail,Alexander,Michael,Noah,Addison,Olivai,Olivia", [3,2,5,2,2,4,5,4,2,3,5,2,3,5,2,1,5,1,1,1,6,6,5,2], 6), "Isabella");