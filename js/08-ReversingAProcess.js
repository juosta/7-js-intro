function decode(r) {
  const a="abcdefghijklmnopqrstuvwxyz";
  const num = parseInt(r);
  let raidesIndex = 0;
  let ieskomosRaidesIndex = 0;
  let ieskomasString = '';

  let res = [];
  for(let i=0;i<26;i++){
    res[i] = (num * i)%26;
    if((new Set(res)).size !== res.length){
        return "Impossible to decode";
    }
  }
  const duotasString = r.replace(/[0-9]/g, '');
  for (let g = 0; g < duotasString.length; g++){
    raidesIndex = a.indexOf(duotasString[g]);
    var remainder = num - (Math.floor(num/26)*26);
    for( let i = 0; i < a.length; i++){
        const x = a.indexOf(a[i]);
        if((remainder * x)%26 === raidesIndex){
            ieskomosRaidesIndex = x;
            break;
        }
    }
    ieskomasString += a[ieskomosRaidesIndex];
  }
  return ieskomasString;
}

console.log(decode('5057aan'));
console.log(decode('1273409kuqhkoynvvknsdwljantzkpnmfgf'));

console.log(decode("1273409kuqhkoynvvknsdwljantzkpnmfgf"), "uogbucwnddunktsjfanzlurnyxmx");
console.log(decode("1544749cdcizljymhdmvvypyjamowl"), "mfmwhbpoudfujjozopaugcb");
console.log(decode("105860ymmgegeeiwaigsqkcaeguicc"), "Impossible to decode");
console.log(decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp"), "rrsxppowmjsrclfljrajtybwviqb");


function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
