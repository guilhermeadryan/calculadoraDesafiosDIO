let vitorias = 0
let derrotas = 0
let rankAtual = ""


while(vitorias <100){
	vitorias++
}

while(derrotas <0){
	derrotas++
}

let resultado = soma = (vitorias - derrotas)


function soma(vitorias,derrotas){
	let somatorio = vitorias - derrotas
    return somatorio
    
}

if(resultado >= 101)
   rankAtual = "Imortal"
   
   else if (resultado >= 91)
   rankAtual = "Lendário"
   
   else if (resultado >= 81)
   rankAtual = "Diamante"
   
   else if (resultado >= 51)
   rankAtual = "Ouro"
   
   else if (resultado >= 21)
   rankAtual = "Prata"
   
   else if (resultado >= 11)
   rankAtual = "Bronze"
   
   else if (resultado <= 10)
   rankAtual = "Ferro"

switch(rankAtual){
default:
	console.log("O Herói tem de saldo de " + soma + " Vitórias e está no nível " + rankAtual)
}
