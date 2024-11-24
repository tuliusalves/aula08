//@ts-check
/**
 *Essa função retorna o valor do desconto de acordo com os parâmetros de preço e porcentagem. 
 * 
 * parâmetro number preco
 * @param {number} preco 
 * 
 * parâmetro number porcentagem
 * @param {*} porcentagem 
 * 
 * retorno do cálculo de desconto do preço em relação a porcentagem.
 * @returns 
 * 
 */
const caulcularDesconto=(preco,porcentagem) =>{
    return preco -(preco* (porcentagem/100));

} 

console.log(caulcularDesconto(100,10));
console.log(caulcularDesconto(250,20));