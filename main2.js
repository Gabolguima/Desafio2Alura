function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let nome = prompt("Qual o seu nome?");
let idade = parseInt(prompt("Quantos anos você tem?"));
let linguagem = prompt("Qual linguagem de programação você está estudando?");


mostra("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo a linguagem " + linguagem + "!");

let resposta = parseInt(prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO."));

if(resposta == 1) {
    mostra("Muito bom! Continue estudando e você terá muito sucesso.");
} 
if(resposta == 2) {
    mostra("Ahh que pena... Já tentou aprender outras linguagens?");
}
