// @ts-nocheck
/**
 * Função "definirDiaDaSemana" irá imprimir uma string
 * do dia da semana de acordo com o número passado que
 * correspondem de 1 a 7, respectivamente, equivalem
 * aos dias.
 * 
 * Parâmetro number dia
 * @param {*} dia 
 * 
 * retorna uma string de acordo com o número. Se o 
 * número não estiver entre 1 e 7. O retorno será
 * "número inválido".
 * @returns 
 */

const definirDiaDaSemana = (dia) => {
    diaRetorno = ''
    switch (dia) {
        case 1:
            diaRetorno = 'Domingo';
            break;
        case 2:
            diaRetorno = 'Segunda-Feira';
            break;
        case 3:
            diaRetorno = 'Terça-Feira';
            break;
        case 4:
            diaRetorno = 'Quarta-Feira';
            break;
        case 5:
            diaRetorno = 'Quinta-Feira';
            break;
        case 6:
            diaRetorno = 'Sexta-Feira';
            break;
        case 7:
            diaRetorno = 'Sábado';
            break;
        default:
            diaRetorno='Número inválido';
    }
    return diaRetorno;
}

console.log(definirDiaDaSemana(3));
console.log(definirDiaDaSemana(7));
console.log(definirDiaDaSemana(8));