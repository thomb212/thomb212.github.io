// Allowing the user to type in each letter

var newWord = $(".word");
var newStage = $(".stage");
var wordNumber = 0;
var overTime;
var stages = 0;
var multiplier = 1;
var newPosX = 1;
var newPosY;
var mouseX = 0;
var stagePosition = 0;

var repeat = window.setInterval(repeatText, 100);



function repeatText() {
  // create extra stage, name it with clone number, append empty div to body
  var extraStage = "<div class='stage" + stages + "'></div>";
  $(".history").append(extraStage);



  // clone the original stage and place copies in the new named divs
  overTime = $(".stageOriginal").html();

  $(".stage" + stages).append(overTime);


  multiplier++;
  newPosY = multiplier * 8;

  if (mouseX < newPosX) {
    newPosX = newPosX - 8;
    $(".white").css("background-color", "#000");
    $(".black").css("background-color", "#FFF");

  } else {
    newPosX = newPosX + 8;
    $(".white").css("background-color", "#FFF");
    $(".black").css("background-color", "#000");
  }


  stagePosition = stagePosition - 8;

  $(".history").css("top", stagePosition + "px");



  // to fix the loading issue, set it to clone the first stage.
  $(".stage" + stages + " .word").css("top", newPosY + "px");
  $(".stage" + stages + " .word").css("left", newPosX + "px");

  // console.log(event.timeStamp);
  stages++;
}


$(window).mousemove(function(event) {
  mouseX = event.clientX;
});



$(window).keypress(function(event) {
  var newLetter;
  var newBigLetter;

  if (event.which == 97 || event.which == 65) {
    newLetter = $(".alphabet .a").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .a").clone();
    $(".typing .text").append(newBigLetter);
  }

  if (event.which == 98 || event.which == 66) {
    newLetter = $(".alphabet .b").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .b").clone();
    $(".typing .text").append(newBigLetter);
  }

  if (event.which == 99 || event.which == 67) {
    newLetter = $(".alphabet .c").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .c").clone();
    $(".typing .text").append(newBigLetter);
  }

  if (event.which == 100 || event.which == 68) {
    newLetter = $(".alphabet .d").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .d").clone();
    $(".typing .text").append(newBigLetter);
  }

  if (event.which == 101 || event.which == 69) {
    newLetter = $(".alphabet .e").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .e").clone();
    $(".typing .text").append(newBigLetter);

  }

  if (event.which == 102 || event.which == 70) {
    newLetter = $(".alphabet .f").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .f").clone();
    $(".typing .text").append(newBigLetter);
  }

  if (event.which == 103 || event.which == 71) {
    newLetter = $(".alphabet .g").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .g").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 104 || event.which == 72) {
    newLetter = $(".alphabet .h").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .h").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 105 || event.which == 73) {
    newLetter = $(".alphabet .i").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .i").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 106 || event.which == 74) {
    newLetter = $(".alphabet .j").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .j").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 107 || event.which == 75) {
    newLetter = $(".alphabet .k").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .k").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 108 || event.which == 76) {
    newLetter = $(".alphabet .l").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .l").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 109 || event.which == 77) {
    newLetter = $(".alphabet .m").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .m").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 110 || event.which == 78) {
    newLetter = $(".alphabet .n").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .n").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 111 || event.which == 79) {
    newLetter = $(".alphabet .o").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .o").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 112 || event.which == 80) {
    newLetter = $(".alphabet .p").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .p").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 113 || event.which == 81) {
    newLetter = $(".alphabet .q").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .q").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 114 || event.which == 82) {
    newLetter = $(".alphabet .r").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .r").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 115 || event.which == 83) {
    newLetter = $(".alphabet .s").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .s").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 116 || event.which == 84) {
    newLetter = $(".alphabet .t").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .t").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 117 || event.which == 85) {
    newLetter = $(".alphabet .u").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .u").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 118 || event.which == 86) {
    newLetter = $(".alphabet .v").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .v").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 119 || event.which == 87) {
    newLetter = $(".alphabet .w").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .w").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 120 || event.which == 88) {
    newLetter = $(".alphabet .x").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .x").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 121 || event.which == 89) {
    newLetter = $(".alphabet .y").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .y").clone();
    $(".typing .text").append(newBigLetter);
  }
  if (event.which == 122 || event.which == 90) {
    newLetter = $(".alphabet .z").clone();
    $(newWord).append(newLetter);
    newBigLetter = $(".alphabet .z").clone();
    $(".typing .text").append(newBigLetter);
  }

  if (event.which == 32) {
    wordNumber = wordNumber + 1;


    newWord = $(".stageOriginal .word").append("<div class='words words" +
      wordNumber +
      "'></div>");
    newWord = $(".words" + wordNumber);
    $(newWord).append(newLetter);
  }

});

// make look back clickable
$(".look-back").click(function() {
  $(".typing").css("display", "none");
});
