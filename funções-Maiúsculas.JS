//Função que faz todas as primeiras letras ficarem maiúsculas
    export  let letraMaiuscula = (nome) => {
            let nomeComeco;
            let restoNome;
            let nomeCompletoMaiusculo = [];
            let primeiraLetra = nome.split(" ");
            for (let i = 0; i < primeiraLetra.length; i++) {
            nomeComeco = primeiraLetra[i].charAt(0);
            restoNome = primeiraLetra[i].substring(1);
            nomeCompletoMaiusculo.push(nomeComeco.toUpperCase() + restoNome);}
            return nomeCompletoMaiusculo.join(" ");};

//Função que faz a primeira letra de somente UMA PALAVRA ficar maiúscula
    export  let letraMaiusculaUnica = (nome) => {
            let nomeComeco = nome.charAt(0)
            let restoNome = nome.substring(1);
            return nome = nomeComeco.toUpperCase() + restoNome;};