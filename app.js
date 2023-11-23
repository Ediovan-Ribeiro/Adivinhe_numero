// Exibe uma mensagem de boas-vindas ao usuário
alert('Boas vindas ao jogo do número secreto');

// Define o valor máximo que o número secreto pode ter
let numeroMaximo = 500;

// Gera um número secreto aleatório entre 1 e numeroMaximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Exibe o número secreto no console (pode ser removido em uma versão final do jogo)
console.log(numeroSecreto);

// Inicializa variáveis para armazenar o chute do usuário, o número de tentativas e a palavra 'tentativa'
let chute;
let tentativas = 1;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Inicia um loop onde o usuário tentará adivinhar o número secreto
while (chute != numeroSecreto) {
    // Solicita que o usuário insira um número
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
   
    // Verifica se o número inserido é igual ao número secreto
    if (chute == numeroSecreto) {
        break;  // Sai do loop se o número for correto
    } else {
        // Informa se o número secreto é maior ou menor que o chute do usuário
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
  
        // Incrementa o número de tentativas
        tentativas++;
    }
}

// Determina se a palavra 'tentativa' deve ser singular ou plural e exibe uma mensagem final
palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
