function bald(x){
    let count = 0;
    for (const i in x){ 
        if( x[i] === "/"){ count++; }
    }
    const shaved = x.replace(/\//g, '-');
    return [shaved, count === 0 ? "Clean!" : count === 1 ? "Unicorn!" : count === 2 ?  "Homer!" : count >= 3 && count <=5 ?  "Careless!" : "Hobo!"];
  }

    console.log(bald('/---------'), ['----------', 'Unicorn!']);
    console.log(bald('/-----/-'), ['--------', 'Homer!']);
    console.log(bald('--/--/---/-/---'), ['---------------', 'Careless!']);
    
