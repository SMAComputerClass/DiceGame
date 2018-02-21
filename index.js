
    var rollButton = document.getElementById("rollButton");
    var pauseButton = document.getElementById("pauseButton");
    //var lastMessage = document.getElementById("lastMessage");

    var counter = 3;
    var firstRoll = true;
    var myAudio;

    // add a listener to the roll button - execute function when 'clicked" event.
    rollButton.addEventListener('click', function(e)
    {
        rollDie();  // I define rollDie separately below
    });

    // add a listener to the roll button - execute function when 'clicked" event.
    pauseButton.addEventListener('click', function(e)
    {
        myAudio.pause();
    });

    //  -------   Begin function rollDie()   ------------
    function rollDie()
    {
        if (firstRoll == true)
        {
          myAudio = new Audio("Song" + (counter++ % 3) + ".mp3");
          //myAudio = new Audio("Song0.mp3");
          firstRoll = false;
        }
        else
        {
            //myAudio.src = "Song1.mp3";
            myAudio.src = "Song" + (counter++ % 3) + ".mp3";
        }

        myAudio.play();

        // generate the random number between 1 and 6
        var rollValue = Math.floor((Math.random() * 6) + 1);

        // set the innerHTML of the die to the number generated
        var die = document.getElementById('die');
        die.innerHTML = rollValue;

        // Retrieve the input data from the HTML
        var betAmount =  document.getElementById("betAmount").value;
        var numberGuessed =  document.getElementById("numberGuess").value;
        var bankroll = document.getElementById("bankrollValue");
        var bankrollNumber = Number( bankroll.innerHTML);  // Convert html text to a number

        // Calculate new bankroll by subtracting the amount bet
        bankrollNumber = bankrollNumber - Number(betAmount);

        // Check if the role matches the guess
        if (rollValue == numberGuessed)
        {
          // Guess was correct.  Add 6 times the bet amount to calculate the new bankroll
          bankroll.innerHTML = bankrollNumber + (6 * Number(betAmount));
          document.getElementById("lastMessage").innerHTML = "You win!";
        }
        else
        {
          // Guess was incorrect.  Simply update the bankroll on the screen.
          bankroll.innerHTML = bankrollNumber;
          document.getElementById("lastMessage").innerHTML = "You lose!";
        }

        console.log ("Got through the code!");
      }
