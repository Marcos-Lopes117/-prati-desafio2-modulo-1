const prompt = require("prompt-sync")();

//exercício 4 - descomente as linhas 4 e 6 para o teste do exercício
//numeroEscolhido = prompt("Escolha um número para o fatorial:") 
try {
    //console.log(fatorial(parseInt(numeroEscolhido)))  
} catch (error) {
    console.error("Erro:", error.message);
}
function fatorial(n) {

    // Trata n < 0 lançando um Error
    if (n < 0) {
        throw new Error("Não é possível calcular o fatorial de um número negativo.");
    }
    // Trata n === 0 retornando 1 (caso base da recursão)
    if (n === 0) {
        return 1;
    }
    // Caso recursivo: n * fatorial(n - 1)
    return n * fatorial(n - 1);
}


//exercício 5 - descomente todo o exercicio para testar
/*
function debounce(fn, delay) {
    let timeoutId; // Variável para armazenar o ID do timer
  
    // Retorna uma nova função que será a versão "debounced" de 'fn'
    return function(...args) {
      // Limpa qualquer timer existente. Se a função for chamada novamente
      // antes do 'delay' expirar, o timer anterior é cancelado.
      clearTimeout(timeoutId);
  
      // Define um novo timer
      timeoutId = setTimeout(() => {
        // Quando o 'delay' expira, executa a função original 'fn'
        // e passa os argumentos que foram recebidos na última chamada.
        fn.apply(this, args); // 'apply' é usado para manter o contexto 'this' e passar os argumentos como um array
      }, delay);
    };
  }
  
  // Exemplo de uso:
  // Definimos uma função de callback simples
  function myCallback() {
    console.log("tick"); // Esta é a função interna"
  }
  
  // versão "debounced" da nossa função de callback com um delay de 500ms
  const debouncedTick = debounce(myCallback, 500);
  
  // Simulando várias chamadas rápidas
  console.log("Chamando debouncedTick rapidamente:");
  debouncedTick(); // Chama 1
  debouncedTick(); // Chama 2 - reinicia o timer
  debouncedTick(); // Chama 3 - reinicia o timer
  debouncedTick(); // Chama 4 - reinicia o timer
  
  // Após um pequeno atraso, chame mais uma vez
  setTimeout(() => {
    debouncedTick(); // Chama 5 - reinicia o timer
  }, 200);
  
  // Se não houverem mais chamadas por 500ms, o "tick" final será exibido
  setTimeout(() => {
    console.log("\nEsperando o debounce finalizar...");
  }, 1000);
  */

  //exercicio 6

  function memoize(fn) {
    // O cache para armazenar os resultados das chamadas anteriores.
    // Usamos um Map para melhor desempenho e para permitir chaves de qualquer tipo (embora aqui stringify as converta).
    const cache = new Map();
  
    // Retorna uma nova função "memoized"
    return function(...args) {
      // Cria uma chave única a partir dos argumentos da chamada.
      // JSON.stringify é usado para converter os argumentos em uma string,
      // garantindo que a ordem dos argumentos e seus valores sejam levados em conta.
      const key = JSON.stringify(args);
  
      // Verifica se o resultado já está no cache
      if (cache.has(key)) {
        // Se sim, retorna o valor em cache instantaneamente
        console.log(`Cache hit para a chave: ${key}`);
        return cache.get(key);
      }
  
      // Se não estiver no cache, executa a função original (fn)
      // Usamos apply para garantir que o contexto 'this' e os argumentos sejam passados corretamente.
      console.log(`Cache miss para a chave: ${key}. Calculando...`);
      const result = fn.apply(this, args);
  
      // Armazena o resultado no cache antes de retorná-lo
      cache.set(key, result);
  
      return result;
    };
  }
  
  // --- Exemplos de Uso --- descomente para testar o exercicio 6
  /*
  // Exemplo 1: Uma função simples de soma
  function add(a, b) {
    // Simula um cálculo demorado
    for (let i = 0; i < 1000000; i++) {}
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log("--- Testando memoizedAdd ---");
  console.log("Primeira chamada: add(2, 3)");
  console.log(memoizedAdd(2, 3)); // Cache miss, calcula e armazena (Saída: 5)
  
  console.log("\nSegunda chamada (mesmos argumentos): add(2, 3)");
  console.log(memoizedAdd(2, 3)); // Cache hit, retorna do cache (Saída: 5)
  
  console.log("\nTerceira chamada (novos argumentos): add(5, 10)");
  console.log(memoizedAdd(5, 10)); // Cache miss, calcula e armazena (Saída: 15)
  
  console.log("\nQuarta chamada (mesmos argumentos da terceira): add(5, 10)");
  console.log(memoizedAdd(5, 10)); // Cache hit, retorna do cache (Saída: 15)
  
  // Exemplo 2: Função com um único argumento (fatorial para demonstrar)
  // Esta função é computacionalmente cara para números grandes.
  function factorial(n) {
    if (n < 0) throw new Error("Não é possível calcular fatorial de número negativo.");
    if (n === 0) return 1;
    // Simula um cálculo demorado
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log("\n--- Testando memoizedFactorial ---");
  console.log("Primeira chamada: factorial(10)");
  console.time("factorial(10) first call");
  console.log(memoizedFactorial(10)); // Cache miss
  console.timeEnd("factorial(10) first call");
  
  console.log("\nSegunda chamada (mesmos argumentos): factorial(10)");
  console.time("factorial(10) second call");
  console.log(memoizedFactorial(10)); // Cache hit
  console.timeEnd("factorial(10) second call");
  
  console.log("\nTerceira chamada: factorial(5)");
  console.time("factorial(5) first call");
  console.log(memoizedFactorial(5)); // Cache miss
  console.timeEnd("factorial(5) first call");
  
  console.log("\nQuarta chamada (mesmos argumentos): factorial(5)");
  console.time("factorial(5) second call");
  console.log(memoizedFactorial(5)); // Cache hit
  console.timeEnd("factorial(5) second call");
  */