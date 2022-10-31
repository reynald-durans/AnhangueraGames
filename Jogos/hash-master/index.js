$(document).ready(function(){

    $('#staticBackdrop').modal('show');

    $('#button_start_game').click(function(){
        getDataPlayers();
    });

    $('td').click(function(){
        if($(this).html()== ""){
                fillColumn(this);
        }
    });
});

function getDataPlayers(){

    let playerOne = $('input[name="input_player_one"]').val();

    let playerTwo = $('input[name="input_player_two"]').val();

    let startGame = true;

    if(playerOne == ""){
        alert("Preencha o campo com o nome do primeiro jogador");
        startGame = false;
    }

    if(playerTwo == ""){
        alert("Preencha o campo com o nome do segundo jogador");
        startGame = false;
    }

    if(startGame == true){
        $('#staticBackdrop').modal('hide');
        fillNamePlayers();
        $('#game').show('slow');
    }

}

function fillNamePlayers(){

    let playerOne = $("input[name='input_player_one']").val();

    let playerTwo = $("input[name='input_player_two']").val();

    $("#span_player_one").html(playerOne);

    $("#span_player_two").html(playerTwo);

}

let lastMove = "";

function fillColumn(column){
    let currentMove;
    if (lastMove == ""){
        currentMove = "X";
    }
    if (lastMove == "O"){
        currentMove = "X";
    }
    if (lastMove == "X"){
        currentMove = "O";
    }

    lastMove = currentMove;

    $(column).html(currentMove);

    console.log(currentMove);
}
