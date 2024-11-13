🎯 Desafio LeetCode 219 - Contém Duplicado II 🎯

Na saga de resolver 30 desafios, este é o meu segundo, e a solução de hoje é para Contains Duplicate II. Vou compartilhar a proposta e a solução. 🚀

Link do desafio: LeetCode - Contains Duplicate II

📌 Descrição do Problema:

O problema pede que, dado um array nums de inteiros e um valor k, verifiquemos se existem dois índices distintos i e j no array que atendam a duas condições:

1️⃣ nums[i] == nums[j]: os valores devem ser iguais.
2️⃣ |i - j| <= k: a diferença entre os índices deve ser, no máximo, k.
Se ambos os requisitos forem atendidos, devemos retornar true; caso contrário, false.

💡 Exemplo de Entrada e Saída:
Entrada: nums = [1,2,3,1], k = 3
Saída: true (os valores 1 nos índices 0 e 3 estão a uma distância de 3)
Entrada: nums = [1,0,1,1], k = 1
Saída: true (os valores 1 nos índices 2 e 3 estão a uma distância de 1)
Entrada: nums = [1,2,3,1,2,3], k = 2
Saída: false (não há pares duplicados que atendam à condição de distância)

🔍 Abordagem e Aprendizado:

🚀 Solução 1: (index.js)
Primeiro, tentei usar dois loops for, que seria uma solução primariamente mais lenta, mas foi a primeira abordagem que pensei mais rapidamente. Essa solução tem complexidade O(n²). O primeiro for loop pega o primeiro índice, depois o segundo for loop procura o mesmo valor, verifica a distância e, caso seja menor ou igual a k, retorna true; caso contrário, retorna false.

Após refletir mais um pouco, realizar algumas pesquisas e analisar soluções feitas por colegas, percebi a vantagem de utilizar o hashmap e tentei aplicá-lo.

🚀 Solução 2 (O(n) com hashmap, metade do tempo): (index2.js)
Nesta abordagem, primeiro declarei um hashmap para armazenar os índices dos elementos. Em seguida, criei um for loop para percorrer o array. Verifiquei se o elemento já existia no hashmap. Se existisse, verifiquei a condição da distância entre os índices e, caso fosse menor ou igual a k, retornava true. Caso contrário, o elemento era adicionado ao hashmap. Se não encontrasse nenhum par que atendesse à condição, retornava false.

hashtag#leetcode hashtag#algoritmos hashtag#desenvolvimentodesoftware hashtag#lógica hashtag#desafios hashtag#programação
