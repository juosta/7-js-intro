//surasti kiek gimineje yra nariu

function memberCount(asmuo){
    let nariuKiekis = 1;

    if (asmuo.children){
        for (let i = 0; i < asmuo.children.length; i++){
            const child = asmuo.children[i];
            nariuKiekis += memberCount(child);
        }
    }

    return nariuKiekis;
}