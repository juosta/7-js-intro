// Gimines medyje reikia rasti kas buvo/yra vyriausias

function oldest(asmuo){
    let biggestAge = asmuo.age;
    let childAge = 0;
    if(asmuo.children){
        for (let i =0; i < asmuo.children.length; i++){
            const child = asmuo.children[i];

            const childAge = oldest(child);
            if(childAge > biggestAge){
                biggestAge = childAge;
            }
        }
    }
    return biggestAge;
}

const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Antanas',
                    age: 49
                },
                {
                    name: 'Ona',
                    age: 50
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43
        },
    ]
}

const vyriausias = oldest(gimine1);

//console.log(vyriausias);


/*
Rasti didziausia skaiciu bet kokio sudetingumo array'juje.
salygos: 
- visi array elementai yra: arba skaicius, arba array;
- visi skaiciai yra normalus;
*/

function recMaxNum(list){
    let big = -Infinity;

    for(let i =0; i < list.length; i++ ){
        const num = list[i];

        if (Array.isArray(num)){ //kai teviniam sarase randa array
            const bigchild = recMaxNum(num);
            if (bigchild > big){
                big = bigchild;
            }
        } else { // kai teviniam sarase randa skaiciu
            if (num > big){
                big = num;
            }

        }

    }

    return big;
}

const data = [
    1,
    -5,
    [
      -4,
      80,
      [
          200,
          3,
          700
      ]
    ],
    78,
    8
    ];

const biggest = recMaxNum(data);
console.log(biggest);