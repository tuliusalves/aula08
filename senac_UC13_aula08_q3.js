// @ts-nocheck
/**
 * Função "parOuImpar" irá avaliar se um número é par ou impar.
 * 
 * parâmetro number num
 * @param {*} num 
 * 
 * retorna string contendo o resultado da condição.
 * @returns 
 */
const parOuImpar =(num) =>{
    if(num){
       return num%2==0  ?  'Par': 'Ímpar';
    }else{
        return 'Por favor digite um número positivo ou negativo.';
    }
}

console.log(parOuImpar());
console.log(parOuImpar(0));
console.log(parOuImpar(10));
console.log(parOuImpar(15));
console.log(parOuImpar(22));