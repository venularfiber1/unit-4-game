

$(document).ready(function () {
    //get random number to match
    var computerNumber = Math.floor(Math.random() * 101 + 19);
    //putting random number to html
    $("#computerNumber").text(computerNumber);

    //making random number for crystals
    var number1 = Math.floor(Math.random() * 11 + 1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    var number3 = Math.floor(Math.random() * 11 + 1);
    var number4 = Math.floor(Math.random() * 11 + 1);

    //variables for the score
    var yourTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#yourtotal').text(yourTotal);

    //function for the win
    function won() {
        alert("You won the game");
        wins++;
        $('#wins').text(wins);
        restart();
    }

    //function for the lose
    function lose() {
        alert("You lost the game");
        losses++;
        $('#losses').text(losses);
        restart();
    }

    //setup onclick and checks if playes answer matches cumputers random answer
    $('#crystalone').on('click', function () {
        yourTotal = yourTotal + number1;

        $('#yourtotal').text(yourTotal);

        if (yourTotal === computerNumber) {
            won();
        }
        else if (yourTotal > computerNumber) {
            lose();
        }
    });

    $('#crystaltwo').on('click', function () {
        yourTotal = yourTotal + number2;

        $('#yourtotal').text(yourTotal);

        if (yourTotal === computerNumber) {
            won();
        }
        else if (yourTotal > computerNumber) {
            lose();
        }
    });

    $('#crystalthree').on('click', function () {
        yourTotal = yourTotal + number3;

        $('#yourtotal').text(yourTotal);

        if (yourTotal === computerNumber) {
            won();
        }
        else if (yourTotal > computerNumber) {
            lose();
        }
    });

    $('#crystalfour').on('click', function () {
        yourTotal = yourTotal + number4;

        $('#yourtotal').text(yourTotal);

        if (yourTotal === computerNumber) {
            won();
        }
        else if (yourTotal > computerNumber) {
            lose();
        }
    });

    //function to restart when game is over
    function restart() {
        computerNumber = Math.floor(Math.random() * 120 + 19);

        $('#computerNumber').text(computerNumber);
        number1 = Math.floor(Math.random() * 11 + 1);
        number2 = Math.floor(Math.random() * 11 + 1);
        number3 = Math.floor(Math.random() * 11 + 1);
        number4 = Math.floor(Math.random() * 11 + 1);
        yourTotal = 0;
        $('#yourtotal').text(yourTotal);

    }
});