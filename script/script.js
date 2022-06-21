// Função de soma

function questao1(){
// Inicialização das variáveis
    let indice = 13;
    let soma = 0
    let k = 0;
    let i = 0;
    
// Condição e ação
    while(k < indice){
        k++;
        soma += k;
    }

// Print no parágrafo com id result1
    document.getElementById('result1').textContent = soma
}

// Função para checar o input na sequência de Fibonacci.

function questao2(){

    // Pegando o valor do input no HTML.
    let num = document.getElementById('inNumero').value

    // Sequência de Fibonacci em array.
    let fibonacci = ['0', '1', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '233', '377', '610', '987', '1597', '2584', '4181', '6765', '10946', '17711', '28657', '46368', '75025', '121393', '196418', '317811']
    
    // indexOf pega a posição de um valor (num) dentro do array.
    let index = fibonacci.indexOf(num)

    // Se o valor não for encontrado dentro do array, o valor do index será -1.
    if(index >= 0){
        document.getElementById('result2').textContent = `O valor ${num} está presente na Sequência de Fibonacci na posição ${index + 1}.`
    }
    else{
        document.getElementById('result2').textContent = `O valor ${num} não está presente na Sequência de Fibonacci.`
    }
}   

function questao3(){
    // Variáveis dos valores iniciais.  
    let valorC = 0
    let valorA = 1, valorE = 1
    let valorB = 2
    let valorD = 4
    
    // Explicação na linha 105    
    let valorF = 200

    // Números auxiliares para ajudar em sequências mais complexas.
    let auxC = 1, auxE = 1
    let somaE = 1

    
    // Contadores para determinar a posição do número na sequência.
    let contA = 0, contB = 0, contC = 0, contD = 0, contE = 0

    // resolução A
    // Sequência simples de 2 em 2. 
    while(contA < 4){
        valorA += 2;
        contA++;
    }
    document.getElementById('resultA').innerHTML = `a) 1, 3 , 5, 7, ${valorA}`
    
    // resolução B
    // Sequência com o dobro do valor.
    while(contB < 6){
        valorB = valorB * 2;
        contB++;
    }
    document.getElementById('resultB').innerHTML = `b) 2, 4, 8, 16, 32, 64, ${valorB}`

    // resolução C
    // A soma do valor + outro valor que sobe de 2 em 2.
    while(contC < 8){
        valorC += auxC;
        auxC += 2;
        contC++;
    }
    document.getElementById('resultC').innerHTML = `c) 0, 1, 4, 9, 16, 25, 36, ${valorC}`

    // resolução D
    while(contD < 3){
        valorD += 2;
        contD += 1;
    }
    // valorD * valorD, pois os números são potências de valores pares (valorD += 2).
    document.getElementById('resultD').innerHTML = `d) 4, 16, 36, 64, ${valorD * valorD}`

    // resolução E
    // Sequência de Fibonacci.
    while(contE < 6){
        somaE = valorE + auxE;
        valorE = somaE;
        somaE = valorE + auxE;
        auxE = somaE;
        contE += 2;
    }
    document.getElementById('resultE').innerHTML = `e) 1, 1, 2, 3, 5, 8, ${valorE}`

    // resolução F
    // Não existe lógica matemática, os números começam com a letra D
    document.getElementById('resultF').innerHTML = `f) 2,10, 12, 16, 17, 18, 19, ${valorF}`
}

function questao4(){
    const velCarro = 110
    const velCaminhao = 80
    let t = 112.8 / 190

    // Equação do MRU (movimento retilíneo uniforme)
    // S(t) = S0 + v . t
    // O valor de t (declarado acima) foi conseguido através da solução da equação 80t = 112.8 - 110t
    let tempoCarro = 0 + velCarro * t

    // Já que o caminhão vai parar duas vezes (+10min), a distância dele foi aumentada adicionando 10min diretamente ao tempo total.
    let tempoCaminhao = 112.8 - velCaminhao * t

    // Calculando distância do destino
    let distCarro = velCarro * t
    let distCaminhao = velCaminhao * t


    document.getElementById('result4').textContent = `O caminhão e o carro vão se ver depois de ${t.toFixed(2)} horas. O valor em minutos é ${t.toFixed(2) * 60}. O caminhão já terá andado ${distCaminhao.toFixed(2)}km e o carro ${distCarro.toFixed(2)}km. Sendo assim, o carro estará na frente.`
}

function questao5(){
        let string = document.getElementById('inReverse').value;

        // Inicialização de uma string com vazia para acumular as letras
        let inverso = "";
  
        // Laço de repetição enquanto o tamanho da string coletada do input durar.          
        for(let i = string.length - 1; i >= 0; i--){
            //i = -1 pega a última letra, i = -2 a penúltima e assim continua até a primeira.           
            inverso += string[i];
        }

        document.getElementById('result5').textContent = inverso;
    }
