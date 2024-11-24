//@ts-check
/**
 * Objeto Usuário. 
 * 
 * propriedade number idade.
 * @param {*} idade 
 * 
 * propriedade boolean isAdmin
 * @param {*} isAdmin
 *  
 * propriedade boolean isBlocked
 * @param {*} isBlocked 
 */
function Usuario(idade,isAdmin,isBlocked) {
    this.idade=idade;
    this.isAdmin=isAdmin;
    this.isBlocked=isBlocked;
}


//@ts-check
/**
 * Funcção "podeAcessar" é uma função que irá avaliar a 
 * permição do usuário de acordo com as propriedades do
 * objeto de "Usuario";
 * 
 * objeto usuario
 * @param {*} usuario 
 * 
 * return false ou true.
 * @returns 
 */
const podeAcessar =(usuario)=>{
    if((usuario.idade>=18 || usuario.isAdmin==true)&&(usuario.isBlocked==false)){
        return true;
    }else{
        return false;
    }
}

let usuario1= new Usuario(20,false,false);
let usuario2= new Usuario(16,true,true);

console.log(podeAcessar(usuario1));
console.log(podeAcessar(usuario2));