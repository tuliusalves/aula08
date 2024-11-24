// @ts-nocheck
/**
 * Função "verificarIdade" irá averiguar se uma pessoa
 * é maior ou menor de idade de acordo com um número.
 * 
 * Parâmetro number num
 * @param {*} num
 * 
 * retorna uma string de acordo com o parâmetro.
 * Se o número não for inserido, o retorno irá pedir
 * pedir para inserir um número.
 * @returns 
 */
const verificarIdade = (num) => {
    retornoMensagem = '';
    if (num) {
        if (num < 18) {
            retornoMensagem = 'Menor de idade';
        } else {
            retornoMensagem  = 'Maior de idade';
        }
    }else{
        retornoMensagem ='Por favor insira um número';
    }
    return retornoMensagem;
}

console.log(verificarIdade());
console.log(verificarIdade(15));
console.log(verificarIdade(18));
console.log(verificarIdade(21));