/*
Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false
*/

function tusciaFunkcija(){
    return false;
}

console.log(tusciaFunkcija());

/*Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;
*/

function daugyba(a, b){
    const sandauga = a * b;
    return sandauga;
}
const skaicius1 = 2;
const skaicius2 = 3;
const skaicius3 = 5;

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

/*Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

function skaitmenuKiekisSkaiciuje(paduotaskintamasis){
    if(typeof paduotaskintamasis !== 'number' || isNaN(paduotaskintamasis)){
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    let skaitmenuKiekisSkaiciuje = `${paduotaskintamasis}`.length;
    return skaitmenuKiekisSkaiciuje;
}

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

/*Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

function didziausiasSkaiciusSarase(paduotaskintamasis){
    if(!Array.isArray(paduotaskintamasis)){
        return "Pateikta netinkamo tipo reikšmė.";
    }
    if(paduotaskintamasis.length === 0){
        return "Pateiktas sąrašas negali būti tuščias.";
    }
    let didziausiasSkaiciusSarase = paduotaskintamasis[0];
    for (let i = 0; i < paduotaskintamasis.length; i++){
        if(paduotaskintamasis[i]>didziausiasSkaiciusSarase){
            didziausiasSkaiciusSarase = paduotaskintamasis[i];
        }
    }
    return didziausiasSkaiciusSarase;
}

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( "pomidoras" ) );
console.log( didziausiasSkaiciusSarase( [] ) );

/*Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/

function isrinktiRaides (tekstas, kelintas){
    if(typeof tekstas !== 'string'){
        return "Pirmasis kintamasis yra netinkamo tipo.";
    }
    if(tekstas.length === 0 && tekstas.length >= 100){
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
    }
    if(typeof kelintas !== 'number' || isNaN(kelintas)){
        return "Antrasis kintamasis yra netinkamo tipo.";
    }
    if(kelintas <= 0){
        return "Antrasis kintamasis turi būti didesnis už nulį.";
    }
    if(kelintas >= tekstas.length){
        return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
    }
    let atrinkta = "";
    for(let i  = kelintas-1; i < tekstas.length ; i+=kelintas){
        atrinkta += tekstas[i];
    }
    
    return atrinkta;
}

console.log( isrinktiRaides( "abcdefg", 2 ) );
console.log( isrinktiRaides( "abcdefghijkl", 3 ) );
console.log( isrinktiRaides( "abc", 0 ) );
console.log( isrinktiRaides( "abc", 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );


/*Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
gražinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/

function dalyba(dalinys, dalmuo){
    if(dalmuo === 0){
        return "Dalmuo negali buti nulis."
    }
    if(typeof dalinys !== 'number' || isNaN(dalinys) || typeof dalmuo !== 'number' || isNaN(dalmuo)){
        return 'kintamieji turi buti skaiciai';
    }
    if(`${dalinys}`.length === 0 ||`${dalmuo}`.length === 0){
        return "Bent vieno kintamojo reikšmė yra netinkamo dydžio.";}
    
    let ats = dalinys / dalmuo;
    return ats;
}


console.log( dalyba(5,0));
console.log( dalyba(8, 'p'));
console.log( dalyba(50, 5));
console.log( dalyba( '', 9));
console.log( dalyba([1, 3, 9], 9));
console.log( dalyba( true , 20));
