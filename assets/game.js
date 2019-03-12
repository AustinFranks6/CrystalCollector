//snadwhich click
//lottery number gen for the random number score and crystal amount
//fridege activity 

// ************************* PSUEDO CODE ******************************
// Make ran num generator for score and crystals
// Make variables for crystals
// Make start score and game score

// ************************* CODE CODE   ******************************

let scoreNum = function() {
    return Math.floor((Math.random() * 120) + 19);
};

let crystalNum = function() {
    return Math.floor((Math.random() * 12) + 1);
};

let crystal = {
    blue: {
    name: "Blue",
    amount: 0
  },

  green: {
    name: "Green",
    amount: 0
  },

  red: {
    name: "Red",
    amount: 0
  },

  yellow: {
    name: "Yellow",
    amount: 0
  }

};

let userScore = 0;
let gameScore = 0;

let win = 0;
let loss = 0;

let gameStart = function() {
    userScore = 0;
    gameScore = scoreNum();

    crystal.blue.amount = crystalNum();
    crystal.red.amount = crystalNum();
    crystal.green.amount = crystalNum();
    crystal.yellow.amount = crystalNum();

    $("#score").text(gameScore);
    $("#total").text(userScore);
    
    console.log("-----------------------------------");
    console.log("Target Score: " + gameScore);
    console.log("Blue: " + crystal.blue.amount + " | Green: " + crystal.green.amount + " | Red: " + crystal.red.amount +
      " | Yellow: " + crystal.yellow.amount);
    console.log("-----------------------------------");
};

let winloss = function() {
    if (userScore === gameScore) {
        win ++;
        $("#wins").text(win);
        gameStart();
    } else if (userScore > gameScore) {
        loss ++;
        $("#losses").text(loss);
        gameStart();
    }  
};

let crystalclick = function(clicked) {
    userScore += clicked.amount;
    $("#total").text(userScore);
    winloss();

    console.log("Your Score: " + userScore);

}

gameStart();

$("#blue").click(function() {
    crystalclick(crystal.blue);
  });
  
  $("#red").click(function() {
    crystalclick(crystal.red);
  });
  
  $("#green").click(function() {
    crystalclick(crystal.green);
  });
  
  $("#yellow").click(function() {
    crystalclick(crystal.yellow);
  });
  