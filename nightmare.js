// set up button variables
start = document.getElementById("start");
scoreText = document.getElementById("score");
promptText = document.getElementById("prompt");
sword = document.getElementById("sword");
crossbow = document.getElementById("crossbow");
forest = document.getElementById("forest");
sea = document.getElementById("sea");
cave = document.getElementById("cave");
rock = document.getElementById("rock");
boat = document.getElementById("boat");
beach = document.getElementById("beach");
fail = fail;
gold = document.getElementById("gold");
mermaid = document.getElementById("mermaid");
answer = document.getElementById("answer");
submit = document.getElementById("submit");
//stores the amount to increase or decrease the score
var increaseScore;
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
        increaseScore = parseInt((Math.random() * (max - min + 1)), 10) + min;
        knight.score += increaseScore;
        scoreText.innerHTML = knight.score;
    }
    //subtracts a random number of points between 1 and 5 from the score.

function losePoints() {
    var max = 5;
    var min = 1;
    increaseScore = parseInt((Math.random() * (max - min + 1)), 10) + min;
    knight.score -= increaseScore;
    scoreText.innerHTML = knight.score;
}

function restartGame() {
        fail.classList.add("hidden");
        gold.classList.add("hidden");
        start.classList.remove("hidden");
        promptText.innerHTML = decisions.welcome;
        knight.score = 0;
        scoreText.innerHTML = knight.score;
    }
    //start button, gives the choice of weapons
start.addEventListener("click", function(event) {
    start.classList.add("hidden");
    promptText.innerHTML = decisions.begin;
    //display harpoon and sword pictures
    sword.classList.remove("hidden");
    crossbow.classList.remove("hidden");
});
//sword button, change weapon value, give choice of destinations
sword.addEventListener("click", function(event) {
    knight.weapon = "sword";
    promptText.innerHTML = decisions.setting;
    gainPoints();
    forest.classList.remove("hidden");
    sword.classList.add("hidden");
    sea.classList.remove("hidden");
    crossbow.classList.add("hidden");
});
//crossbow button, change weapon value, give choice of destinations
crossbow.addEventListener("click", function(event) {
    knight.weapon = "crossbow";
    promptText.innerHTML = decisions.setting;
    gainPoints();
    forest.classList.remove("hidden");
    sword.classList.add("hidden");
    sea.classList.remove("hidden");
    crossbow.classList.add("hidden");
});
//forest button,  gives choice of enter cave or throw rock
forest.addEventListener("click", function(event) {
    promptText.innerHTML = decisions.forest;
    gainPoints();
    cave.classList.remove("hidden");
    forest.classList.add("hidden");
    rock.classList.remove("hidden");
    sea.classList.add("hidden");
});
//rock button,checks weapon, tells you if you defeat the dragon or die, ends game
rock.addEventListener("click", function(event) {
    cave.classList.add("hidden");
    rock.classList.add("hidden");
    if (knight.weapon === "sword") {
        gold.classList.remove("hidden");
        promptText.innerHTML = decisions.defeatDragon;
        gainPoints();
    } else {
        fail.classList.remove("hidden");
        promptText.innerHTML = decisions.dragonDeath;
        losePoints();
    }
});
//cave button, tells you that you died, ends game
cave.addEventListener("click", function(event) {
    cave.classList.add("hidden");
    rock.classList.add("hidden");
    fail.classList.remove("hidden");
    promptText.innerHTML = decisions.cave;
    losePoints();
});
//sea button,  gives choice of boat or beach
sea.addEventListener("click", function(event) {
    promptText.innerHTML = decisions.boat;
    gainPoints();
    boat.classList.remove("hidden");
    forest.classList.add("hidden");
    beach.classList.remove("hidden");
    sea.classList.add("hidden");
});
//boat button, checks weapon, tells you if you defeat the sea monster or die, ends game
boat.addEventListener("click", function(event) {
    boat.classList.add("hidden");
    beach.classList.add("hidden");
    if (knight.weapon === "crossbow") {
        gold.classList.remove("hidden");
        promptText.innerHTML = decisions.defeatSeaMonster;
        gainPoints();
    } else {
        fail.classList.remove("hidden");
        promptText.innerHTML = decisions.seaMonsterDeath;
        losePoints();
    }
});
//beach button, gives you the mermaid riddle, a text box, and a submit button
beach.addEventListener("click", function(event) {
    boat.classList.add("hidden");
    beach.classList.add("hidden");
    mermaid.classList.remove("hidden");
    mermaid.classList.add("ownLine");
    submit.classList.remove("hidden");
    answer.classList.remove("hidden");
    promptText.innerHTML = decisions.mermaid;
});
//riddle text box submit button, evaluates answer, tells you if you are slave or get gold, ends game
submit.addEventListener("click", function(event) {
    mermaid.classList.add("hidden");
    mermaid.classList.remove("ownLine");
    submit.classList.add("hidden");
    answer.classList.add("hidden");
    if (answer.value.toLowerCase() === "fish") {
        gold.classList.remove("hidden");
        promptText.innerHTML = decisions.riddleSuccess;
        gainPoints();
    } else {
        fail.classList.remove("hidden");
        promptText.innerHTML = decisions.riddleFail;
        losePoints();
    }
    answer.value = "";
});
fail.addEventListener("click", function(event) {
    restartGame();
});
gold.addEventListener("click", function(event) {
    restartGame();
});
