$(document).ready(function() {
    //stores the amount to increase or decrease the score
    var increaseScore;
    //selects the div that contains displayed text
    var promptText = $("#prompt");
    //selects the div that contains displayed score
    var scoreText = $("#score");
    //object to hold player information
    var knight = {
        weapon: "none",
        score: 0,
    };
    //object to hold all the text for the decicion points
    var decisions = {
        welcome: "Welcome! Click on Steve to begin.",
        begin: "Good morning! It's time for an adventure. Choose your weapon?",
        setting: "Where does your adventure take you today?",
        forest: "You've just stumbled on a creepy, dark cave. Do you throw a rock in first, or just march right in?",
        defeatDragon: "You have awoken the dragon and he runs out of the cave right at you! Thank goodness you brought your sword. You have slain the dragon, stolen its treasure, and return to your castle as a hero. Huzzah!",
        dragonDeath: "You have awoken the dragon and he runs out of the cave right at you! Your weapon is no match for this beast. You should have chosen your sword. The dragon destroys you in a single bite and your entire family forgets about you by Christmas.",
        cave: "You have awoken the dragon and he runs out of the cave right at you! Your weapon is no match for this beast. You should have chosen your sword. The dragon destroys you in a single bite and your entire family forgets about you by Christmas.",
        defeatSeaMonster: "You have encountered a sea monster! Thank goodness you brought your crossbow. You have slayed the sea monster and return to your castle a hero.",
        seaMonsterDeath: "You have encountered a sea monster! Your weapon is no match for this beast. You should have chosen your crossbow. The sea monster destroys you in a single bite and your entire family forgets about you by Christmas.",
        boat: "There is an empty boat! What do you do: Continue to walk up the beach, or get in the boat and paddle out to sea?",
        mermaid: "You have encountered a mermaid! She asks you this riddle:  Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking. What am I?",
        riddleSuccess: "You are brilliant! You solved the mermaid's riddle, so she gives you her gold and allows you to return home.",
        riddleFail: "What a stupid answer. The mermaid has tricked you and you will spend the rest of your days as her servant. It will not be fun."
    };
    //adds a random number of points between 1 and 5 to the score.
    function gainPoints() {
            var max = 5;
            var min = 1;
            increaseScore = parseInt((Math.random() * (max - min + 1)),
                10) + min;
            knight.score += increaseScore;
            scoreText.text(knight.score);
        }

    //subtracts a random number of points between 1 and 5 from the score.
    function losePoints() {
            var max = 5;
            var min = 1;
            increaseScore = parseInt((Math.random() * (max - min + 1)),
                10) + min;
            knight.score -= increaseScore;
            scoreText.text(knight.score);
        }

    function restartGame() {
          $("#fail").addClass("hidden");
          $("#gold").addClass("hidden");
          $("#start").removeClass("hidden");
          promptText.text(decisions.welcome);
          knight.score=0;
          scoreText.text(knight.score);
          $("#answer").val("");
        }

    //start button, gives the choice of weapons
    $("#start").click(function() {
        $("#start").addClass("hidden");
        promptText.text(decisions.begin);
        //display harpoon and sword pictures
        $("#sword").removeClass("hidden");
        $("#crossbow").removeClass("hidden");
    });
    //sword button, change weapon value, give choice of destinations
    $("#sword").click(function() {
        knight.weapon = "sword";
        promptText.text(decisions.setting);
        gainPoints();
        $("#forest").removeClass("hidden");
        $("#sword").addClass("hidden");
        $("#sea").removeClass("hidden");
        $("#crossbow").addClass("hidden");
    });
    //crossbow button, change weapon value, give choice of destinations
    $("#crossbow").click(function() {
        knight.weapon = "crossbow";
        promptText.text(decisions.setting);
        gainPoints();
        $("#forest").removeClass("hidden");
        $("#sword").addClass("hidden");
        $("#sea").removeClass("hidden");
        $("#crossbow").addClass("hidden");
    });
    //forest button,  gives choice of enter cave or throw rock
    $("#forest").click(function() {
        promptText.text(decisions.forest);
        gainPoints();
        $("#cave").removeClass("hidden");
        $("#forest").addClass("hidden");
        $("#rock").removeClass("hidden");
        $("#sea").addClass("hidden");
    });
    //rock button,checks weapon, tells you if you defeat the dragon or die, ends game
    $("#rock").click(function() {
        $("#cave").addClass("hidden");
        $("#rock").addClass("hidden");
        if (knight.weapon === "sword") {
            $("#gold").removeClass("hidden");
            promptText.text(decisions.defeatDragon);
            gainPoints();
        } else {
            $("#fail").removeClass("hidden");
            promptText.text(decisions.dragonDeath);
            losePoints();
        }
    });
    //cave button, tells you that you died, ends game
    $("#cave").click(function() {
        $("#cave").addClass("hidden");
        $("#rock").addClass("hidden");
        $("#fail").removeClass("hidden");
        promptText.text(decisions.cave);
        losePoints();
    });
    //sea button,  gives choice of boat or beach
    $("#sea").click(function() {
        promptText.text(decisions.boat);
        gainPoints();
        $("#boat").removeClass("hidden");
        $("#forest").addClass("hidden");
        $("#beach").removeClass("hidden");
        $("#sea").addClass("hidden");
    });
    //boat button, checks weapon, tells you if you defeat the sea monster or die, ends game
    $("#boat").click(function() {
        $("#boat").addClass("hidden");
        $("#beach").addClass("hidden");
        if (knight.weapon === "crossbow") {
            $("#gold").removeClass("hidden");
            promptText.text(decisions.defeatSeaMonster);
            gainPoints();
        } else {
            $("#fail").removeClass("hidden");
            promptText.text(decisions.seaMonsterDeath);
            losePoints();
        }
    });
    //beach button, gives you the mermaid riddle, a text box, and a submit button
    $("#beach").click(function() {
        $("#boat").addClass("hidden");
        $("#beach").addClass("hidden");
        $("#mermaid").removeClass("hidden");
        $("#mermaid").addClass("ownLine");
        $("#submit").removeClass("hidden");
        $("#answer").removeClass("hidden");
        promptText.text(decisions.mermaid);
    });
    //riddle text box submit button, evaluates answer, tells you if you are slave or get gold, ends game
    $("#submit").click(function() {
        $("#mermaid").addClass("hidden");
        $("#mermaid").removeClass("ownLine");
        $("#submit").addClass("hidden");
        $("#answer").addClass("hidden");
        if ($("#answer").val().toLowerCase() === "fish") {
            $("#gold").removeClass("hidden");
            promptText.text(decisions.riddleSuccess);
            gainPoints();
        } else {
            $("#fail").removeClass("hidden");
            promptText.text(decisions.riddleFail);
            losePoints();
        }
    });
    $("#fail").click(function() {
      restartGame();
  });
  $("#gold").click(function() {
      restartGame();
    });
});
