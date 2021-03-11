/* Ciklo for panaudojimas
 01 Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a) 0 - 0
b) 0 - 4
c) 0 - 100
d) 574 - 815
e) -50 - 50
f) -70 - 30
*/

// a
let suma = 0;
let i=0;
for (i = 0; i <= 0; i++) {
  suma += i;
}
console.log(suma);

// b
suma = 0;
for (i = 0; i <= 4; i++) {
  suma += i;
}
console.log(suma);

// c

suma = 0;
for (i = 0; i <= 100; i++) {
  suma += i;
}
console.log(suma);

// d
suma = 0;
for (i = 574; i <= 815; i++) {
  suma += i;
}
console.log(suma);

//e
suma = 0;
for (i = -50; i <= 50; i++) {
  suma += i;
}
console.log(suma);

//f
suma = 0;
for (i = -70; i <= 30; i++) {
  suma += i;
}
console.log(suma);

/* 2 
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/
let raides = 'abcdef';
let atvirksciai="";
for(i = raides.length-1; i >= 0; i--){
    atvirksciai += raides [i];
}
console.log('RAIDES', atvirksciai);

/* 3
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

// a) intervale [0;11]
const intervalas1 = '0 ir 11';
let dalijasi3 = 0;
let dalijasi5 = 0;
let dalijasi7 = 0;
i=0;
for(i = 0; i <= 11; i++){
        if(Number.isInteger(i/3)){
            dalijasi3++;
        }
        if(Number.isInteger(i/5)){
            dalijasi5++;
        }
        if(Number.isInteger(i/7)){
            dalijasi7++;
        }
}
console.log(`Skaičių intervale tarp ${intervalas1}, besidalijančių be liekanos iš 3 yra ${dalijasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${intervalas1}, besidalijančių be liekanos iš 5 yra ${dalijasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${intervalas1}, besidalijančių be liekanos iš 7 yra ${dalijasi7} vienetai.`);

// b) intervale [8;31]
const intervalas2 = '8 ir 31';
dalijasi3 = 0;
dalijasi5 = 0;
dalijasi7 = 0;
i=0;
for(i = 8; i <= 31; i++){
        if(Number.isInteger(i/3)){
            dalijasi3++;
        }
        if(Number.isInteger(i/5)){
            dalijasi5++;
        }
        if(Number.isInteger(i/7)){
            dalijasi7++;
        }
}
console.log(`Skaičių intervale tarp ${intervalas2}, besidalijančių be liekanos iš 3 yra ${dalijasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${intervalas2}, besidalijančių be liekanos iš 5 yra ${dalijasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${intervalas2}, besidalijančių be liekanos iš 7 yra ${dalijasi7} vienetai.`);

// c) intervale [-18;18]
const intervalas3 = '-18 ir 18';
dalijasi3 = 0;
dalijasi5 = 0;
dalijasi7 = 0;
i=0;
for(i = -18; i <= 18; i++){
        if(Number.isInteger(i/3)){
            dalijasi3++;
        }
        if(Number.isInteger(i/5)){
            dalijasi5++;
        }
        if(Number.isInteger(i/7)){
            dalijasi7++;
        }
}
console.log(`Skaičių intervale tarp ${intervalas3}, besidalijančių be liekanos iš 3 yra ${dalijasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${intervalas3}, besidalijančių be liekanos iš 5 yra ${dalijasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${intervalas3}, besidalijančių be liekanos iš 7 yra ${dalijasi7} vienetai.`);