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
let nuo = 0;
let iki = 0;

let suma = 0;
let i=0;
for (i = nuo; i <= iki; i++) {
  suma += i;
}
console.log(suma);

// b
iki = 4;
suma = 0;
for (i = nuo; i <= iki; i++) {
  suma += i;
}
console.log(suma);

// c
iki = 100;
suma = 0;
for (i = nuo; i <= iki; i++) {
  suma += i;
}
console.log(suma);

// d
nuo = 574;
iki = 815;
suma = 0;
for (i = nuo; i <= iki; i++) {
  suma += i;
}
console.log(suma);

//e
nuo = -50;
iki = 50;
suma = 0;
for (i = nuo; i <= iki; i++) {
  suma += i;
}
console.log(suma);

//f
nuo = -70;
iki = 30;
suma = 0;
for (i = nuo; i <= iki; i++) {
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
console.log(raides,'->', atvirksciai);

 raides = 'abcdef';
 atvirksciai="";
for(i = raides.length; i > 0; i--){
    atvirksciai += raides [i-1];
}
console.log(raides,'->', atvirksciai);

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
const nuo1 = 0;
const iki1 = 11;
let dalijasi3 = 0;
let dalijasi5 = 0;
let dalijasi7 = 0;
const daliklis1 = 3;
const daliklis2 = 5;
const daliklis3 = 7;
i=0;
for(i = nuo1; i <= iki1; i++){
  if(i % daliklis1 === 0){
      dalijasi3++;
  }
  if(i % daliklis2 === 0){
      dalijasi5++;
  }
  if(i % daliklis3 === 0){
      dalijasi7++;
  }
}
console.log(`Skaičių intervale tarp ${nuo1} ir ${iki1}, besidalijančių be liekanos iš 3 yra ${dalijasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo1} ir ${iki1}, besidalijančių be liekanos iš 5 yra ${dalijasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo1} ir ${iki1}, besidalijančių be liekanos iš 7 yra ${dalijasi7} vienetai.`);

// b) intervale [8;31]
const nuo2 = 8;
const iki2 = 31;

dalijasi3 = 0;
dalijasi5 = 0;
dalijasi7 = 0;
i=0;
for(i = nuo2; i <= iki2; i++){
        if(i % daliklis1 === 0){
            dalijasi3++;
        }
        if(i % daliklis2 === 0){
            dalijasi5++;
        }
        if(i % daliklis3 === 0){
            dalijasi7++;
        }
}
console.log(`Skaičių intervale tarp ${nuo2} ir ${iki2}, besidalijančių be liekanos iš 3 yra ${dalijasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo2} ir ${iki2}, besidalijančių be liekanos iš 5 yra ${dalijasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo2} ir ${iki2}, besidalijančių be liekanos iš 7 yra ${dalijasi7} vienetai.`);

// c) intervale [-18;18]
const nuo3 = -18
const iki3 = 18;
dalijasi3 = 0;
dalijasi5 = 0;
dalijasi7 = 0;
i=0;
for(i = nuo3; i <= iki3; i++){
  if(i % daliklis1 === 0){
      dalijasi3++;
  }
  if(i % daliklis2 === 0){
      dalijasi5++;
  }
  if(i % daliklis3 === 0){
      dalijasi7++;
  }
}
console.log(`Skaičių intervale tarp ${nuo3} ir ${iki3}, besidalijančių be liekanos iš 3 yra ${dalijasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo3} ir ${iki3}, besidalijančių be liekanos iš 5 yra ${dalijasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${nuo3} ir ${iki3}, besidalijančių be liekanos iš 7 yra ${dalijasi7} vienetai.`);