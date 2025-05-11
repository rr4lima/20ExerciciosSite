const ano = document.getElementById("ano");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado"); 

botao.addEventListener("click", function () {
   resultado.textContent = "";

   const nascimento = parseInt(ano.value); 
   const anoAtual = new Date().getFullYear(); 

   if (ano.value.trim() === "") {
       alert("Insira o ano de nascimento.");
       return; 
   } else if (isNaN(nascimento) || nascimento <= 1900 || nascimento > anoAtual) {
       alert("Insira um ano válido.");
       return;
   } else {
       const idade = anoAtual - nascimento; 

       if (idade < 18) { 
           resultado.textContent = `Você tem ${idade} anos. Você é de menor.`;
       } else if (idade >= 18 && idade < 60) {
           resultado.textContent = `Você tem ${idade} anos. Você é adulto.`;
       } else if (idade >= 60) {
           resultado.textContent = `Você tem ${idade} anos. Você é idoso.`;
       }
   }
});
