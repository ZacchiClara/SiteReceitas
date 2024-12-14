function calcular(){
    //Seleciona todas as linhas da tabela
    const linhas = document.querySelectorAll("table tr");
    let totalGeral = 0; // Variavel para armazenar o total geral

    //Itera sobre as linhas da tabela
    linhas.forEach((linha, index) => {
        if (index > 0 && index < linhas.length -1) { // Ignora o cabeçalho e a ultima linha
            const preco = linha.querySelector(".preco input").value; // Obtem o valor do campo "Quantidade"
            const quantidade = linha.querySelector(".qtd").value; // Obtem o valor do campo "Quantidade"
            const total = preco * quantidade || 0; // Calcula o total(ou 0 se os campos estiverem vazios)
            linha.querySelector(".total").textContent = total.toFixed(2); // Atualiza a celula "Total" com o valor calculado
            totalGeral += total; // adiciona o valor ao total geral
         }
    });

    // Atualiza a celula de "Total Geral" com o valor calculado
    document.getElementById("totalFinal").textContent = totalGeral.toFixed(2);
}
