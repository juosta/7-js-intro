// surasti kiek gimineje yra nariu

// function memberCount(asmuo){
//     let nariuKiekis = 1;

//     if (asmuo.children){
//         for (let i = 0; i < asmuo.children.length; i++){
//             const child = asmuo.children[i];
//             nariuKiekis += memberCount(child);
//         }
//     }

//     return nariuKiekis;
// }

function averageAge(asmuo){
    let childCount = 1;
    let childAgeSum = asmuo.age;

    if (asmuo.children){
        for(let i = 0; i< asmuo.children.length; i++){
            const child =  asmuo.children[i];

            const childinfo = averageAge(child);
            childCount += childinfo.childCount;
            childAgeSum+= childinfo.agesum;
        }
    }

    return {
        childCount: childCount,
        agesum: childAgeSum
    };
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

const gautasobje = averageAge(gimine1);
const average = gautasobje.agesum / gautasobje.childCount;
console.log(average);