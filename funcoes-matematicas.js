//Função para somar dois valores
      let somar = (a, b) => { return a + b};

//Função para subtrair dois valores
      let subtrair = (a, b) => { return a - b};

//Função para dividir dois valores
      let dividir = (a, b) => { return a / b};

//Função para multiplicar dois valores
      let multiplicar = (a, b) => { return a * b};

//Função para potenciação de um número
      let potencia = (a, b) => { return a ** b};

//Função para descobrir tantos porcento de um valor
      let calcularValorPorcentagem = (a, b) => { return (a / 100) * b }

//Função para descobrir porcentagem de um valor
      let calcularPorcentagemDoValor = (a, b) => { return (b / a) * 100 }
    
//Função pra calcular Fibonacci
      let fibonacci = (n) => {
            let Listafibonacci = [1,1];
            while(Listafibonacci.length < n) {
                  Listafibonacci.push(Listafibonacci[Listafibonacci.length-1] + Listafibonacci[Listafibonacci.length-2]);
            } return Listafibonacci}

//Função que calcula o fatorial de um número(estou fazendo)