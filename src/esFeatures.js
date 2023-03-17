/*Atribuição via desestruturação*/

let pessoa = {
    nome: "João Soares",
    email: "joao.soares8@estudante.ifms.edu.br"
}

/* let nome = pessoa.nome
let email = pessoa.email */

let {nome, email} = pessoa
console.log(nome, email)


let nomes = ["João", "Vitor"]

let {pessoa1, pessoa2} = nomes
console.log(pessoa1, pessoa2)



/*Como o useState funciona no React*/
function useState(){
    let state = ''
    function setState(){}
    return [state, setState]
}

const [name, setState] = useState()