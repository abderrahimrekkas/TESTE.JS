const prompt = require('prompt-sync')();
function factoriel(n) {
    if (n === 0 || n === 1) {
        return 1; // Le factoriel de 0 ou 1 est 1
    } else {
        return n * factoriel(n - 1); // Appel récursif
    }
}
for (let i = 0; i < 1000; i++) {
    const operateur = prompt("Entrez un operateur (+, -, *, /, ^, >,!) : ");

        switch (operateur) {
            
            case '+':
                 num1 = prompt("Entrez un nombre : ");
                 num2 = prompt("Entrez un autre nombre : ");
                 bom=parseFloat(num1)+parseFloat(num2)
                 console.log(`resultat :${bom} `);
                break;
            case'-':
                 num1 = prompt("Entrez un nombre : ");
                 num2 = prompt("Entrez un autre nombre : ");
                 console.log(`resultat :${num1 - num2}`);
                 break;
            case '*':
                num1 = prompt("Entrez un nombre : ");
                num2 = prompt("Entrez un autre nombre : ");
                console.log(`resultat : ${num1 * num2}`);
                break;
            case '/':
                 num1 = prompt("Entrez un nombre : ");
                 num2 = prompt("Entrez un autre nombre : ");
                if (num2 === 0) {
                    console.log("Erreur wow ");
                } else {
                    console.log(`resultat : ${num1 / num2}`);
                }
                break;
        
            case '^':
                num1 = prompt("Entrez un nombre : ");
                num2 = prompt("Entrez un autre nombre : ");
                console.log(`resultat : ${Math.pow(num1, num2)}`);
                break;
        
            case '>':
                num1 = prompt("Entrez un nombre : ");
                if(num1 < 0){
                    console.log("Erreur");
                }else {
                    console.log(`resultat : ${Math.sqrt(num1)}`);
                }
                break;

            case '!': 
                 num1 = prompt("Entrez un nombre : ");
                 num1 = parseInt(num1);
                console.log(`Resultat : ${factoriel(num1)}`);
                break;
        
        default:
            console.log("Opérateur invalide !");
        }
}