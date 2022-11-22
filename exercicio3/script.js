let nomeCompleto =prompt("Qual seu nome completo?")
let birthday =prompt("Qual sua Data de Nascimento? Separado por /")
let address = prompt("Qual seu endereço?")
let cpf = Number(prompt("CPF (Somente os numeros)"))
let escolaridade = prompt("Qual sua escolaridade")
let cnh = prompt("Você possui cnh?")
let filhos = Number(prompt("Quantos filhos possui?"))
let cargoAtual = prompt("Qual seu cargo atual?")
let salario = Number(prompt("Qual seu salário atual?"))
let comissao = Number(prompt("Recebe comissão? Se sim, informe porcentagem, caso não, responda com zero"))
let admissao = Number(prompt("Ano de admissão:"))

console.log(typeof nomeCompleto, 
    typeof birthday, 
    typeof address,
    typeof cpf,
    typeof escolaridade,
    typeof cnh,
    typeof filhos,
    typeof cargoAtual,
    typeof salario,
    typeof comissao,
    typeof admissao
    )

    console.log({nomeCompleto,
    birthday,
    address, cpf, escolaridade, cnh, filhos, cargoAtual,
salario, comissao, admissao})
