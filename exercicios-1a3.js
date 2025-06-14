const prompt = require("prompt-sync")();

// exercicio 1
//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
//formarem uma data real (meses de 28–31 dias, ano bissexto para
//fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    // Validação básica: verifica se dia, mês e ano são números válidos e dentro de uma faixa razoável.
    if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number' ||
        dia < 1 || mes < 1 || mes > 12 || ano < 1) { // Considerando anos positivos para simplificar.
        return false;
    }

    // Array para armazenar o número de dias em cada mês (índice 0 é ignorado para facilitar: mês 1 = índice 1).
    const diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica ano bissexto para fevereiro.
    // Um ano é bissexto se for divisível por 4, exceto se for divisível por 100 e não por 400.
    if (mes === 2) {
        const isAnoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        if (isAnoBissexto) {
            diasNoMes[2] = 29; // Atualiza fevereiro para 29 dias se for bissexto.
        }
    }

    // Verifica se o dia está dentro do limite de dias para o mês especificado.
    if (dia > diasNoMes[mes]) {
        return false;
    }

    // Se todas as verificações passaram, a data é válida.
    return true;
}

// Exemplos de uso ex 1:
// console.log("29/02/2024 (bissexto):", ehDataValida(29, 2, 2024)); // true
// console.log("29/02/2023 (não bissexto):", ehDataValida(29, 2, 2023)); // false
// console.log("31/04/2023 (abril tem 30):", ehDataValida(31, 4, 2023)); // false
// console.log("31/12/2023 (válido):", ehDataValida(31, 12, 2023)); // true
// console.log("01/01/2000 (válido):", ehDataValida(1, 1, 2000)); // true
// console.log("32/01/2023 (dia inválido):", ehDataValida(32, 1, 2023)); // false
// console.log("01/13/2023 (mês inválido):", ehDataValida(1, 13, 2023)); // false
// console.log("Data inválida (string):", ehDataValida("a", 1, 2023)); // false
// console.log("Data inválida (negativo):", ehDataValida(1, 1, -2023)); // false

//___________________________________________________________________________________________________________________________


// exercicio 2
//Escreva um script que gere um número aleatório de 1 a 100 e peça ao
//usuário, para adivinhar. Use while para repetir até acertar, contando
//tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

function jogoDeAdivinhacao() {
    // Gera um número aleatório entre 1 e 100 (inclusive)
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite = 0;
  
    console.log("Bem-vindo ao Jogo de Adivinhação! Estou pensando em um número entre 1 e 100.");
  
    // Loop principal do jogo
    while (palpite !== numeroSecreto) {
      
        palpite = parseInt(prompt("Qual é o seu palpite?"));
  
      // Validação de entrada: verifica se o palpite é um número válido
      if (isNaN(palpite)) {
        console.log("Por favor, digite um número válido.");
        continue; // Volta para o início do loop sem contar como tentativa
      }
  
      tentativas++; // Incrementa o contador de tentativas a cada palpite válido
  
      if (palpite < numeroSecreto) {
       console.log("Mais alto! Tente novamente.");
      } else if (palpite > numeroSecreto) {
        console.log("Mais baixo! Tente novamente.");
      } else {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`);
      }
    }
  }
  
  //descomente para Iniciar o jogo do exercicio 2
  //jogoDeAdivinhacao();


  //_________________________________________________________________________________

  //exercicio 3

  function extrairPalavrasUnicas(texto) {
   
    const palavrasSuja = texto.toLowerCase().replace(/[.,!?;:"]/g, '').split(' ');
  
    const palavrasUnicas = []; // Array para armazenar as palavras únicas
  
    // Itera sobre cada palavra no array de palavras extraídas
    for (let i = 0; i < palavrasSuja.length; i++) {
      const palavraAtual = palavrasSuja[i].trim(); // Remove espaços em branco extras, se houver
  
      // Garante que a palavra não seja vazia (pode acontecer com múltiplos espaços)
      if (palavraAtual === '') {
        continue; // Pula para a próxima iteração se for uma string vazia
      }
  
      let encontrada = false; // Flag para verificar se a palavra já está no array de únicas
  
      // Itera sobre as palavras já adicionadas em palavrasUnicas
      for (let j = 0; j < palavrasUnicas.length; j++) {
        if (palavraAtual === palavrasUnicas[j]) {
          encontrada = true; // A palavra já foi encontrada, seta a flag
          break; // Sai do loop interno, não precisa verificar o resto
        }
      }
  
      // Se a palavra não foi encontrada no array de únicas, adicione-a
      if (encontrada === false) {
        palavrasUnicas.push(palavraAtual);
      }
    }
  
    return palavrasUnicas;
  }
  
  // Exemplos de uso:
 // descomente para testar

  //const texto1 = "olá olá mundo mundo";
  //console.log(`Texto: "${texto1}"`);
  //console.log("Palavras únicas:", extrairPalavrasUnicas(texto1)); // Saída: [ 'olá', 'mundo' ]
  
  //const texto2 = "Este é um teste, um teste de palavras únicas.";
  //console.log(`\nTexto: "${texto2}"`);
  //console.log("Palavras únicas:", extrairPalavrasUnicas(texto2)); // Saída: [ 'este', 'é', 'um', 'teste', 'de', 'palavras', 'únicas' ]
  
  //const texto3 = "JavaScript é legal. JavaScript é muito útil!";
  //console.log(`\nTexto: "${texto3}"`);
  //console.log("Palavras únicas:", extrairPalavrasUnicas(texto3)); // Saída: [ 'javascript', 'é', 'legal', 'muito', 'útil' ]
  
  //const texto4 = "   Deus  é   mais!   ";
  //console.log(`\nTexto: "${texto4}"`);
  //console.log("Palavras únicas:", extrairPalavrasUnicas(texto4)); // Saída: [ 'duas', 'palavras', 'aqui' ]