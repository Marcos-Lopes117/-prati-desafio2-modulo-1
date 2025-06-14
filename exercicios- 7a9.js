//exercicio 7

function getNomesProdutosOrdenadosPorPreco(produtos) {
    // 1. Cria uma cópia do array original e ordena por preço crescente.
    // Usamos slice() para criar uma cópia e evitar modificar o array 'produtos' original.
    // O método sort() com a função de comparação (a, b) => a.preco - b.preco
    // garante a ordenação crescente por preço.
    const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);
  
    // 2. Mapeia o array ordenado para extrair apenas os nomes dos produtos.
    // O método map() percorre cada item do array 'produtosOrdenados'
    // e retorna um novo array contendo apenas a propriedade 'nome' de cada produto.
    const nomesOrdenados = produtosOrdenados.map(produto => produto.nome);
  
    return nomesOrdenados;
  }
  
  // --- Exemplo de Uso ---
  
  const produtos = [
    { nome: "Smartphone", preco: 1200 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Fone de Ouvido", preco: 150 },
    { nome: "Teclado Mecânico", preco: 400 },
    { nome: "Monitor Ultrawide", preco: 2000 },
    { nome: "Mouse Gamer", preco: 250 }
  ];
  
  const nomesOrdenados = getNomesProdutosOrdenadosPorPreco(produtos);
  
  console.log("Nomes dos produtos ordenados por preço crescente:");
  console.log(nomesOrdenados);
  
 
  
  // Para provar que o array original não foi modificado:
  console.log("\nArray de produtos original (inalterado):");
  console.log(produtos);
   




  //exercicio 8
  /*
  function totalizarVendasPorCliente(vendas) {
    // O método reduce itera sobre o array 'vendas'.
    // O primeiro argumento da callback (acumulador) é o objeto que estamos construindo.
    // O segundo argumento (vendaAtual) é o item atual do array 'vendas'.
    // O segundo argumento de reduce ({}) é o valor inicial do acumulador, um objeto vazio.
    return vendas.reduce((acumulador, vendaAtual) => {
      const { cliente, total } = vendaAtual; // Desestrutura o cliente e o total da venda atual
  
      // Se o cliente já existe como chave no acumulador, soma o total.
      // Caso contrário, inicializa o total para esse cliente.
      acumulador[cliente] = (acumulador[cliente] || 0) + total;
  
      return acumulador; // Retorna o acumulador atualizado para a próxima iteração
    }, {}); // Objeto vazio como valor inicial do acumulador
  }
  
  // --- Exemplo de Uso ---
  const vendas = [
    { cliente: "Alice", total: 100 },
    { cliente: "Bob", total: 250 },
    { cliente: "Alice", total: 50 },
    { cliente: "Charlie", total: 120 },
    { cliente: "Bob", total: 80 },
    { cliente: "Alice", total: 75 }
  ];
  
  const totaisPorCliente = totalizarVendasPorCliente(vendas);
  
  console.log("Totais de vendas por cliente:");
  console.log(totaisPorCliente);
  */

  
  // exercicio 9
  /*
  function paresParaObjeto(pares) {
    // O reduce itera sobre o array de 'pares'.
    // 'obj' é o objeto acumulador que estamos construindo, iniciado como um objeto vazio {}.
    // '[chave, valor]' desestrutura cada par no array.
    return pares.reduce((obj, [chave, valor]) => {
      obj[chave] = valor; // Atribui o valor à chave no objeto acumulador.
      return obj; // Retorna o objeto atualizado para a próxima iteração.
    }, {}); // O valor inicial do acumulador é um objeto vazio.
  }
  
  // Exemplo de uso:
  const paresExemplo1 = [
    ['nome', 'Alice'],
    ['idade', 30],
    ['cidade', 'São Paulo']
  ];
  const objetoGerado = paresParaObjeto(paresExemplo1);
  console.log("Objeto gerado a partir dos pares:", objetoGerado);
  // Saída: { nome: 'Alice', idade: 30, cidade: 'São Paulo' }

  function objetoParaPares(obj) {
    // Object.entries() retorna um array de arrays [chave, valor] para todas as propriedades
    // enumeráveis de um objeto. É o método ideal para esta conversão.
    return Object.entries(obj);
  }
  
  // Exemplo de uso:
  const objetoExemplo2 = {
    produto: 'Notebook',
    preco: 2500,
    estoque: 15
  };
  const paresGerados = objetoParaPares(objetoExemplo2);
  console.log("Pares gerados a partir do objeto:", paresGerados);
  // Saída: [ ['produto', 'Notebook'], ['preco', 2500], ['estoque', 15] ]
  */