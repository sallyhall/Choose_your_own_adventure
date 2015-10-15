$(document).ready(function() {
    console.log("ready!");
    var choice;
    var increaseScore;
    var promptText = $("#prompt");
    var knight = {
        weapon: "none",
        setting: "home",
        score: 0,
        alive: true
    };
    //start button, gives the choice of weapons
    $("#start").click(function() {
        $("#start").addClass("hidden");
        promptText.text(
            "Good morning! It's time for an adventure.Choose your weapon: sword or crossbow?"
        );
        //display harpoon and sword pictures
        $("#sword").removeClass("hidden");
        $("#crossbow").removeClass("hidden");
    });
    //harpoon and sword buttons, change weapon value, give choice of destinations
    //sword button
    $("#sword").click(function() {
        knight.weapon = "sword";
        promptText.text("Will you go to the forest or the sea?");
        $("#forest").removeClass("hidden");
        $("#sword").addClass("hidden");
        $("#sea").removeClass("hidden");
        $("#crossbow").addClass("hidden");
    });
    //crossbow button
    $("#crossbow").click(function() {
        knight.weapon = "crossbow";
        promptText.text("Will you go to the forest or the sea?");
        $("#forest").removeClass("hidden");
        $("#sword").addClass("hidden");
        $("#sea").removeClass("hidden");
        $("#crossbow").addClass("hidden");
    });
    //forest button, changes setting value, gives choice of enter cave or throw rock
    $("#forest").click(function() {
        knight.setting = "forest";
        promptText.text(
            "You've just stumbled on a creepy, dark cave. What do you do? Enter rock if you throw a rock in side, enter proceed if you go on in."
        );
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
            promptText.text(
                "You have awoken the dragon and he runs out of the cave right at you! Thank goodness you brought your sword. You have slain the dragon, stolen its treasure, and return to your castle as a hero."
            );
        } else {
            promptText.text(
                "You have awoken the dragon and he runs out of the cave right at you! Your weapon is no match for this beast. You should have chosen your sword. The dragon destroys you in a single bite and your entire family forgets about you by Christmas."
            );
        }
    });
    //cave button, tells you that you died, ends game
    $("#cave").click(function() {
        $("#cave").addClass("hidden");
        $("#rock").addClass("hidden");
        promptText.text(
            "What kind of knight just walks into a cave without checking for dragons first? Of course there was a dragon in there. He eats you and your family chalks it up to natural selection."
        );
    });
    //sea button, changes setting value, gives choice of boat or beach
    $("#sea").click(function() {
        knight.setting = "sea";
        promptText.text(
            "There is an empty boat! What do you do? Enter beach if you are going to walk up the beach, enter boat if you are going to get in the boat and paddle out to sea."
        );
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
            promptText.text(
                "You have encountered a sea monster! Thank goodness you brought your harpoon. You have slayed the sea monster and return to your castle a hero."
            );
        } else {
            promptText.text(
                "You have encountered a sea monster! Your weapon is no match for this beast. You should have chosen your harpoon. The sea monster destroys you in a single bite and your entire family forgets about you by Christmas."
            );
        }
    });
    //beach button, gives you the mermaid riddle and a text box
    $("#beach").click(function() {
        $("#boat").addClass("hidden");
        $("#beach").addClass("hidden");
        $("#submit").removeClass("hidden");
        $("#answer").removeClass("hidden");
        promptText.text(
            "You have encountered a mermaid! She asks you this riddle: Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking. What am I?"
        );
    });
    //riddle text box submit button, evaluates answer, tells you if you are slave or get gold, ends game
    $("#submit").click(function() {
        if ($("#answer").val().toLowerCase() === "fish") {
            promptText.text(
                "You are brilliant! You solved the mermaid's riddle, so she gives you her gold and allows you to return home."
            );
        } else {
            promptText.text(
                "What a stupid answer. The mermaid has defeated you and you will spend the rest of your days as her servant. No, not the hot kind."
            );
        }
    });
});

function gainPoints() {
    var max = 5;
    var min = 1;
    increaseScore = parseInt((Math.random() * (max - min + 1)), 10) + min;
    knight.score += increaseScore;
    alert("You have gained " + increaseScore + " points. You now have " +
        knight.score + " points.");
}

function losePoints() {
    var max = 5;
    var min = 1;
    increaseScore = parseInt((Math.random() * (max - min + 1)), 10) + min;
    knight.score -= increaseScore;
    alert("You have lost " + increaseScore + " points. You now have " +
        knight.score + " points.");
}
