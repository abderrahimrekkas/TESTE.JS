const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
 let number1;
 let number2;
 function calculatrice(){
  rl.question('entrer un operateur(+,-,*,/,^,@:) ',(operateur) => {
    rl.question('entrer le premier nombre : ', (number1) => {
    rl.question('entrer le dexiéme nombre : ', (number2) => {
    const a = parseFloat(number1);
    const b =parseFloat(number2);
    const addition= a+b;  
    const soustraction=a - b;
    const multiplication=a * b;
    const  division=a/b;
    switch(operateur){
      case'+':
      console.log("resultat :" + addition + '.');
      break;
      case'-':
      console.log("resultat :" + soustraction +'.');
      break;
      case'*':
      console.log("resultat :"+ multiplication +'.');
      break;
      case'/':
      if(b==0){
      console.log("error wow");
      }else
      console.log(" resultat :" + division +'.');
      break;
case'^':
console.log(`resultat:${Math.pow(a,b)}`);
break;
case'(@)':
console.log(`resultat:${Math.sqrt(a,b)}`);
break;

default:
    console.log("l'operateur invalide !!!!");

    }
    calculatrice();
});
 });
});
 }
 
calculatrice();
