var choice;
var increaseScore;

var knight = {
  weapon: "none",
  setting: "home",
  score: 0,
  alive: true
};

function main(){
  alert("Good morning! It's time for an adventure");
  knight.weapon=prompt("Choose your weapon: sword or harpoon?");
  console.log(knight.weapon);

  knight.setting=prompt("Will you go to the forest or the sea?");
  gainPoints();
  switch (knight.setting){
    case "sea":
      choice=prompt("There is an empty boat! What do you do? Enter beach if you are going to walk up the beach, enter boat if you are going to get in the boat and paddle out to sea.");
      gainPoints();
      break;
    case "forest":
      choice=prompt("You've just stubmled on a creepy, dark cave. What do you do? Enter rock if you throw a rock in side, enter proceed if you go on in.");
      gainPoints();
      break;
    default:
        alert("I'm not sure where you're going, but you'll be on your own from now on.");
        losePoints();
        return;
  }

  switch (knight.setting){
    case "sea":
      if (choice==="boat"){
        if(knight.weapon==="harpoon"){
          gainPoints();
          alert("You have encountered a sea monster! Thank goodness you brought your harpoon. You have slayed the sea monster and return to your castle a hero.");
        }else{
          alert("You have encountered a sea monster! Your weapon is no match for this beast. You should have chosen your harpoon. The sea monster destroys you in a single bite and your entire family forgets about you by Christmas.");
          losePoints();
        }
      }else{
        gainPoints();
        choice=prompt("You have encountered a mermaid! She asks you this riddle: Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking. What am I?");
        if(choice==="fish"){
          gainPoints();
          alert("You are brilliant! You solved the mermaid's riddle, so she gives you her gold and allows you to return home.");
        }else{
          alert("What a stupid answer. The mermaid has defeated you and you will spend the rest of your days as her servant. No, not the hot kind.");
          losePoints();
        }
      }
      break;
    case "forest":
      if (choice==="rock"){
            if(knight.weapon==="sword"){
            gainPoints();
            alert("You have awoken the dragon and he runs out of the cave right at you! Thank goodness you chosen your sword. You have slayed the dragon, stolen its treasure, and return to your castle a hero.");
            }else{
              alert("You have awoken the dragon and he runs out of the cave right at you! Your weapon is no match for this beast. You should have chosen your sword. The dragon destroys you in a single bite and your entire family forgets about you by Christmas.");
              losePoints();
            }
          }else{
            alert("What kind of knight just walks into a cave without checking for dragons first? Of course there was a dragon in there. He eats you and your family chalks it up to natural selection.");
            losePoints();
          }
      break;
  }
  alert("Your final score is " + knight.score + " points. Interpret that however you'd like. Life isn't a competition, dude.");
}

function gainPoints(){
  var max=5;
  var min=1;
  increaseScore=parseInt((Math.random() * (max - min + 1)), 10) + min;
  knight.score+=increaseScore;
  alert("You have gained " + increaseScore + " points. You now have " + knight.score + " points.");
}

function losePoints(){
  var max=5;
  var min=1;
  increaseScore=parseInt((Math.random() * (max - min + 1)), 10) + min;
  knight.score-=increaseScore;
  alert("You have lost " + increaseScore + " points. You now have " + knight.score + " points.");
}

main();
