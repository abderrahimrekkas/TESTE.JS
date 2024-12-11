const prompt = require('prompt-sync')();
for (let i = 0; i < 1000; i++) {
    const operateur = prompt("Entrez un operateur (+, -, *, /, ^, >) : ");
    const num1 = prompt("Entrez un nombre : ");
    const num2 = prompt("Entrez un autre nombre : ");
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
        
    case '>': 
            if (num1 < 0) {
                console.log("Erreur wow ");
            } else {
                console.log(`Résultat : ${Math.sqrt(num1)}`);
            }
            break;
    
        default:
            console.log("Opérateur invalide !");
        }

}
