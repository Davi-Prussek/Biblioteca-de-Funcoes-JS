//Função que faz a primeira letra de somente UMA PALAVRA ficar maiúscula
      let letraMaiusculaUnica = (nome) => {
            let nomeComeco = nome.charAt(0)
            let restoNome = nome.substring(1);
            return nome = nomeComeco.toUpperCase() + restoNome;};
            
//Função que faz todas as primeiras letras ficarem maiúsculas
      let letraMaiuscula = (nome) => {
            let nomeComeco;
            let restoNome;
            let nomeCompletoMaiusculo = [];
            let primeiraLetra = nome.split(" ");
            for (let i = 0; i < primeiraLetra.length; i++) {
            nomeComeco = primeiraLetra[i].charAt(0);
            restoNome = primeiraLetra[i].substring(1);
            nomeCompletoMaiusculo.push(nomeComeco.toUpperCase() + restoNome);}
            return nomeCompletoMaiusculo.join(" ");};

//Função que faz a primeira letra de todas as palavras MENOS AS PREPOSIÇÕES listadas na lista preposicao
      let letra_Maisc_Prep = (nome) => {
            let preposicao = ["a", "ante", "após", "até", "com", "contra", "de", "desde", "em",
            "entre", "para", "perante", "por", "sem", "sob", "sobre", "trás", "da", "de", "do"];
            let nomeComeco;
            let restoNome;
            let nomeCompletoMaiusculo = [];
            let primeiraLetra = nome.split(" ");
                  for (let i = 0; i < primeiraLetra.length; i++) {
                        let palavraMinuscula = primeiraLetra[i].toLowerCase();
                              if (preposicao.includes(primeiraLetra[i])) {
                                    nomeCompletoMaiusculo.push(palavraMinuscula);    
                              }else {
                                    nomeComeco = primeiraLetra[i].charAt(0);
                                    restoNome = primeiraLetra[i].substring(1);
                                    nomeCompletoMaiusculo.push(nomeComeco.toUpperCase() + restoNome)}};
      return nomeCompletoMaiusculo.join(" ");};