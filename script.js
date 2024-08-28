function saber(){
    frase=document.getElementById("frase").value;
    resposta = ''
 
    for(i = 0; i < frase.length; i++){
        resposta += frase.charCodeAt(i) + ' ';
    }
    document.getElementById('saida').innerHTML = resposta;
}


function traduzir(){
    numeros = document.getElementById("numeros").value

    codigos = numeros.split(' ').map(Number);

    resposta = String.fromCharCode(...codigos);
    
    document.getElementById('saida1').innerHTML = resposta;

}