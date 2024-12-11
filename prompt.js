const prompt = require('prompt-sync')();
for (let i = 0; i < 1000; i++) {
    const operateur = prompt("Entrez un operateur (+, -, *, /, ^, >) : ");
    const num1 = prompt("Entrez un nombre : ");
    const num2 = prompt("Entrez un autre nombre : ");
    
        switch (operateur) {
            case '+':
                console.log(`resultat : ${num1 + num2}`);
                break;
        
            case '-':
                console.log(`resultat : ${num1 - num2}`);
                break;
        
            case '':
                console.log(`resultat : ${num1 * num2}`);
                break;
        
            case '/':
                if (num2 === 0) {
                    console.log("Erreur wow ");
                } else {
                    console.log(`resultat : ${num1 / num2}`);
                }
                break;
        
            case '^':
                console.log(`resultat : ${Math.pow(num1, num2)}`);
                break;
        
            case '>':
                if(num1 < 0){
                    console.log("Erreur");
                }else {
                    console.log(`resultat : ${Math.sqrt(num1,num2)}`);
                }
                break;
        
    
        default:
            console.log("Opérateur invalide !");
        }
}