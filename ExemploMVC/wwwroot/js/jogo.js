
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {

    var cartas1 = document.getElementById("cartas1");
    var placar1 = document.getElementById("placar1");
    var valor = valorAleatorio();
    
    var placarAntigo = parseInt(placar1.innerText.valueOf());
    if (placarAntigo >= 21) {
        parar1();
    }
    else {
        $(cartas1).attr("src", '/images/' + valor + '.png'); 
        var placarNovo = placarAntigo + valor;
        $(placar1).text(placarNovo);
    }
}

function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function jogador2() {

    var cartas2 = document.getElementById("cartas2");
    var placar2 = document.getElementById("placar2")
    var valor = valorAleatorio();
    $(cartas2).attr("src", '/images/' + valor + '.png');


    var placarAntigo = parseInt(placar2.innerText.valueOf());
    if (placarAntigo < 21) {
        var placarNovo = placarAntigo + valor;
        $(placar2).text(placarNovo);
    }
    else {
        parar2();
    }
}

function parar2() {
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    resultado();

}
/*
    jogador 1   x   jogador 2   resultado
    <= 21           <= 21       maior ponto ganha   REGRA 1
    > 21            <= 21       jogador 2 ganha     REGRA 2
    <= 21           > 21        jogador 1 ganha     REGRA 3
    > 21            > 21        2 perderam          REGRA 4
    jogador 2       jogador 1   EMPATE              REGRA 5
*/
function resultado() {
    var resultado = document.getElementById("resultado");
    var resultado1 = parseInt(placar1.innerText.valueOf());
    var resultado2 = parseInt(placar2.innerText.valueOf());

    if (resultado1 <= 21 && resultado2 <= 21) {
        if (resultado1 == resultado2) {
            resultado.innerHTML = "EMPATE";
        } else if (resultado1 > resultado2) {
            resultado.innerHTML = "Jogador 1 Ganhou!";
        } else {
            resultado.innerText = "Jogador 2 Ganhou!";
        }
    }
    else if (resultado1 > resultado2 && resultado2 <= 21) {
        resultado.innerText = "Jogador 2 Ganhou!"; //REGRA 2

        if (resultado1 <= 21 && resultado2 > 21) {
            resultado.innerText = "Jogador 1 ganhou!";//REGRA 3
        }    
    }
    else {
        resultado.innerText = "SEM VENCEDOR!!"; //REGRA 4
    }

}

function reiniciar() {
    var resultado = document.getElementById("resultado");

    
    var cartas1 = document.getElementById("cartas1");
    var cartas2 = document.getElementById("cartas2");

    placar1.innerText = "0";
    placar2.innerText = "0";
    resultado.innerHTML = "";

    $(cartas1).attr("src", './images/0.png'); 
    $(cartas2).attr("src", '/images/0.png'); 

    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');

}

function iniciar() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    var p1 = parseInt(placar1.innerText.valueOf());
    var p2 = parseInt(placar2.innerText.valueOf());


    if (p1 == 0 && p2 == 0) {
        $(btn_jogador1).removeAttr('disabled');
        $(btn_parar1).removeAttr('disabled');

        $(btn_jogador2).removeAttr('disabled');
        $(btn_parar2).removeAttr('disabled');
    }

    
}

