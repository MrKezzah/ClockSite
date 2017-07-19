var currentTimeTab;
var futureTime;
var settingsOut = false;
var isUp = false;
var endTime;
var boxShadowColor = "#008282";
var textShadowColor = "#A40073";

// TODO: Clean-up repeated code in 'ready' and the click functions.

$(document).ready(function(){
  setInterval(updateClock, 1000);
  visibilityOn('.buttonTimer');
  $(".buttonTimer").mouseenter(function(){
    mouseFade(".buttonTimer", "fast", 1);
  });
  $(".buttonTimer").mouseleave(function(){
    mouseFade(".buttonTimer", "fast", 0.2);
  });
  $(".name").mouseenter(function(){
    mouseFade(".name", "slow", 1);
  });
  $(".name").mouseleave(function(){
    mouseFade(".name", "slow", 0.2);
  });
  $(".toggleHolder").mouseenter(function(){
    mouseFade(".toggleHolder", "fast", 1);
  });
  $(".toggleHolder").mouseleave(function(){
    mouseFade(".toggleHolder", "fast", 0.2);
  });
  $(".settingsHolder").mouseenter(function(){
    mouseFade(".settingsHolder", "fast", 1);
  });
  $(".settingsHolder").mouseleave(function(){
    mouseFade(".settingsHolder", "fast", 0.2);
  });
  $("td").mouseenter(function(){
    mouseFade(this,"fast", 1);
  });
  $("td").mouseleave(function(){
    mouseFade(this,"fast", 0.2);
  });
});

function borderChange(borderColor, shadowColor){
  boxShadowColor = shadowColor;
  $("html").css("--cust-border-color", borderColor);
  $("html").css("--box-shadow-color", shadowColor);
  setShadowOn(".timer", "box", shadowColor);
  setShadowOn(".timerEnd", "box", shadowColor);
  setShadowOn(".timerSettings", "box", shadowColor);
}

function textColorChange(textColor, shadowColor){
  textShadowColor = shadowColor;
  $("html").css("color", textColor);
  $("html").css("text-shadow",'0px 0px 40px' + shadowColor);
  setShadowOn(".timer", "text", shadowColor);
  setShadowOn(".timerEnd", "text", shadowColor);
  setShadowOn(".timerSettings", "text", shadowColor);
}

function mouseFade(element, speed, opacity){
  $(element).stop(false,false).fadeTo(speed , opacity);
}

function visibilityOn(element){
  $(element).css('visibility', 'visible');
}

function visibilityOff(element){
  $(element).css('visibility', 'hidden');
}

function setShadowOn(element, shadowType, shadowColor) {
  if(shadowType == "box"){
    $(element).css('box-shadow', '0px 0px 75px' + shadowColor +", inset 0px 0px 50px" + shadowColor);

  }
  if(shadowType == "text"){
    $(element).css('text-shadow', '0px 0px 40px' + shadowColor);
  }
}

function setShadowOff(element, shadowType) {
  if(shadowType == "box"){
    $(element).css('box-shadow', '0px 0px 0px');
  }
  if(shadowType == "text"){
    $(element).css('text-shadow', '0px 0px 0px');
  }
}

function setBackground(element, colour) {
  $(element).css('background-color', colour);
}

$("#redBorder").click(function(){
  borderChange('#FF0000', '#6B0000');
});

$("#orangeBorder").click(function(){
  borderChange('#FF7400', '#D96200');
});

$("#greenBorder").click(function(){
  borderChange('#BBFF00', '#96CD00');
});

$("#blueBorder").click(function(){
  borderChange('#00FFFF', '#008282');
});

$("#pinkBorder").click(function(){
  borderChange('#FF00B2', '#A40073');
});

$("#whiteBorder").click(function(){
  borderChange('#ffffff', '#ffffff');
});

$("#redText").click(function(){
  textColorChange('#FF0000', '#6B0000');
});

$("#orangeText").click(function(){
  textColorChange('#FF7400', '#D96200');
});

$("#greenText").click(function(){
  textColorChange('#BBFF00', '#96CD00');
});

$("#blueText").click(function(){
  textColorChange('#00FFFF', '#008282');
});

$("#pinkText").click(function(){
  textColorChange('#FF00B2', '#A40073');
});

$("#whiteText").click(function(){
  textColorChange('#ffffff', '#ffffff');
});

$(".buttonTimer").click(function(){
  $(".timerClock").html(currentTimeTab);
  $(".timerEndClock").html(futureTime);
  visibilityOn(".toggleHolder");
  visibilityOn(".settingsHolder");
  if (isUp == false) {
    visibilityOn(".timer");
    visibilityOn(".timerEnd");
    $(".timer").stop(false,false).animate({ top: '-100px' }, function(){
      $(".timer").css("z-index", "0");
    });
    $(".timerEnd").stop(false,false).animate({ top: '-100px' }, function(){
      $(".timerEnd").css("z-index", "0");
    });
    setShadowOn(".timer", "box", boxShadowColor);
    setShadowOn(".timerEnd", "box", boxShadowColor);
    setShadowOn(".timer", "text", textShadowColor);
    setShadowOn(".timerEnd", "text", textShadowColor);
    isUp = true;
    return;
  }
});

$(".buttonToggle").click(function(){
  if (isUp == false) {
    $(".timer").stop(false,false).animate({ top: '-100px' }, function(){
      $(".timer").css("z-index", "0");
    });
    $(".timerEnd").stop(false,false).animate({ top: '-100px' }, function(){
      $(".timerEnd").css("z-index", "0");
    });
    setShadowOn(".timer", "box", boxShadowColor);
    setShadowOn(".timerEnd", "box", boxShadowColor);
    setShadowOn(".timer", "text", textShadowColor);
    setShadowOn(".timerEnd", "text", textShadowColor);
    isUp = true;
    return;
  }
  if (isUp == true){
    $(".timer").stop(false,false).animate({ top: '10px' });
    $(".timerEnd").stop(false,false).animate({ top: '10px' });
    setShadowOff(".timer", "box", boxShadowColor);
    setShadowOff(".timerEnd", "box", boxShadowColor);
    setShadowOff(".timer", "text", textShadowColor);
    setShadowOff(".timerEnd", "text", textShadowColor);
    $(".timer").css("z-index", "-1");
    $(".timerEnd").css("z-index", "-1");
    isUp = false;
    return;
  }
});

$(".buttonSettings").click(function(){
  if (settingsOut == false){
    $(".timerSettings").stop(false,false).animate({ right: '-225px' }, function(){
      $(".timerSettings").css("z-index", "0");
    });
    visibilityOn(".timerSettings");
    setShadowOn(".timerSettings", "box", boxShadowColor);
    setShadowOn(".timerSettings", "text", textShadowColor);
    settingsOut = true;
    return;
  }
  if (settingsOut == true){
    $(".timerSettings").stop(false,false).animate({ right: '20px' });
    setShadowOff(".timerSettings", "box", boxShadowColor);
    setShadowOff(".timerSettings", "text", textShadowColor);
    $(".timerSettings").css("z-index", "-1");
    settingsOut = false;
    return;
  }
});

function endTimeCheck(){
  if(endTime >60){
    $("#endTime").val(60);
  }

  if(endTime < 0){
    $("#endTime").val(0);
  }
}

function updateClock ( ){
 	  currentTime = new Date ( );
    endTime = $("#endTime").val();
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );
    var futureHours = currentTime.getHours();
    var futureMinutes = currentTime.getMinutes() + parseInt(endTime);
    var ampm = "AP";

    endTimeCheck();
    if (currentHours > 12){
      ampm = "PM";
    }

    if (currentHours < 12) {
      ampm = "AM";
    }

    if (futureMinutes > 60 ) {
      futureHours = parseInt(futureHours) + 1;
      futureMinutes = futureMinutes - 60;
      if(futureHours < 10){
        futureHours = "0" + futureHours;
      }
      if (futureMinutes < 10) {
        futureMinutes = "0" + futureMinutes;
      }
    }

    if (futureMinutes == 60) {
      futureHours = parseInt(futureHours) + 1;
      if(futureHours < 10){
        futureHours = "0" + futureHours;
      }
      futureMinutes = "00";
    }

    if (endTime == 60) {
      futureMinutes = currentMinutes;
    }

    currentHours = checkHours(currentHours);
    currentMinutes = checkMinSec(currentMinutes);
    currentSeconds = checkMinSec(currentSeconds);
    futureHours = checkHours(futureHours);
    futureMinutes = checkMinSec(futureMinutes);
    futureTime = futureHours + ":" + futureMinutes + ":" + currentSeconds;
    currentTimeTab = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  	var currentTimeHrMin = currentHours + ":" + currentMinutes;
    $(".clockAMPM").html(ampm);
   	$(".clockHM").html(currentTimeHrMin);
    $(".clockSec").html(currentSeconds);
    $(".clockTab").html(currentTimeTab);
    if(currentHours == 11){
      $(".clockHM").css("padding-left", "40px");
      $(".clockHM").css("padding-right", "0px");
    }
    else{
      $(".clockHM").css("padding-right", "25px");
    }
 }

function checkMinSec(minSec){
  minSec = parseInt(minSec);
  if (minSec < 10) {
    minSec = "0" + minSec;
    return minSec;
  }

  else{
    return minSec;
  }
}

 function checkHours(hours){
   hours = parseInt(hours);

   if(hours > 12){
     hours = hours - 12;
     if (hours < 10){
       hours = "0" + hours;
       return hours;
     }
     else {
       return hours;
     }
   }

   if (hours == 0) {
     hours = 12;
     return hours;
   }

   if (hours == "00") {
     hours = 12;
     return hours;
   }

   if(hours < 10 && hours > 0){
     hours = "0" + hours;
     return hours;
   }

   else{
     return hours;
   }
 }
