function gerarTabuada() {
    // Obter o número digitado pelo usuário
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    
    // Limpar resultado anterior
    
    resultado.innerHTML = '';
    
    // Validar se o número é válido
    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = '<p style="color: red;">Por favor, digite um número válido maior que 0.</p>';
        return;
    }
    
    // Criar título da tabuada
    const titulo = document.createElement('h3');
    titulo.textContent = `Tabuada do ${numero}`;
    titulo.style.textAlign = 'center';
    titulo.style.marginBottom = '15px';
    titulo.style.color = '#333';
    resultado.appendChild(titulo);
    
    // Gerar a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        const calculo = numero * i;
        
        // Criar elemento para cada linha da tabuada
        const linha = document.createElement('div');
        linha.className = 'tabuada-item';
        linha.textContent = `${numero} × ${i} = ${calculo}`;
        
        resultado.appendChild(linha);
    }
}

// Gerar tabuada automaticamente quando a página carregar

window.onload = function() {
    gerarTabuada();
    
    
    // Adicionar evento para gerar tabuada quando o usuário pressionar Enter
    document.getElementById('numero').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            gerarTabuada();
        }
    });
    
    // Gerar tabuada automaticamente quando o número for alterado
    document.getElementById('numero').addEventListener('input', gerarTabuada);

    
};