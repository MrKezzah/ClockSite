var currentTimeTab;
var futureTime;
var settingsOut = false;
var isUp = false;
var endTime;

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
});

function mouseFade(element, speed, opacity){
  $(element).stop(false,false).fadeTo(speed , opacity);
}

function visibilityOn(element){
  $(element).css('visibility', 'visible');
}

function visibilityOff(element){
  $(element).css('visibility', 'hidden');
}

function setShadowOn(element, shadowType) {
  if(shadowType == "box"){
    $(element).css('box-shadow', '0px 0px 75px #3e84ad');
  }
  if(shadowType == "text"){
    $(element).css('text-shadow', '0px 0px 40px #C774E8');
  }
}

function setShadowOff(element, shadowType) {
  if(shadowType == "box"){
    $(element).css('box-shadow', '0px 0px 0px #3e84ad');
  }
  if(shadowType == "text"){
    $(element).css('text-shadow', '0px 0px 0px #C774E8');
  }
}

function setBackground(element, colour) {
  $(element).css('background-color', colour);
}

$(".buttonTimer").click(function(){
  $(".timerClock").html(currentTimeTab);
  $(".timerEndClock").html(futureTime);
  visibilityOn(".toggleHolder");
  visibilityOn(".settingsHolder");
  if (isUp == false) {
    visibilityOn(".timer");
    visibilityOn(".timerEnd");
    $(".timer").stop(false,false).animate({ top: '-100px' });
    $(".timerEnd").stop(false,false).animate({ top: '-100px' });
    visibilityOn(".innerBoxTimer");
    setShadowOn(".timer", "box");
    setShadowOn(".timerEnd", "box");
    setShadowOn(".timer", "text");
    setShadowOn(".timerEnd", "text");
    setBackground(".timer", 'black');
    setBackground(".timerEnd", 'black');
    isUp = true;
    return;
  }
});

$(".buttonToggle").click(function(){
  if (isUp == false) {
    $(".timer").stop(false,false).animate({ top: '-100px' });
    $(".timerEnd").stop(false,false).animate({ top: '-100px' });
    visibilityOn(".innerBoxTimer");
    setShadowOn(".timer", "box");
    setShadowOn(".timerEnd", "box");
    setShadowOn(".timer", "text");
    setShadowOn(".timerEnd", "text");
    setBackground(".timer", 'black');
    setBackground(".timerEnd", 'black');
    isUp = true;
    return;
  }
  if (isUp == true){
    $(".timer").stop(false,false).animate({ top: '10px' });
    $(".timerEnd").stop(false,false).animate({ top: '10px' });
    visibilityOff(".innerBoxTimer");
    setShadowOff(".timer", "box");
    setShadowOff(".timerEnd", "box");
    setShadowOff(".timer", "text");
    setShadowOff(".timerEnd", "text");
    setBackground(".timer", 'transparent');
    setBackground(".timerEnd", 'transparent');
    isUp = false;
    return;
  }
});

$(".buttonSettings").click(function(){
  if (settingsOut == false){
    $(".timerSettings").stop(false,false).animate({ right: '-225px' });
    visibilityOn(".timerSettings");
    visibilityOn(".innerBoxSettings");
    setBackground(".timerSettings", "black");
    setShadowOn(".timerSettings", "box");
    setShadowOn(".timerSettings", "text");
    settingsOut = true;
    return;
  }
  if (settingsOut == true){
    $(".timerSettings").stop(false,false).animate({ right: '20px' });
    visibilityOff(".innerBoxSettings");
    setBackground(".timerSettings", "transparent");
    setShadowOff(".timerSettings", "box");
    setShadowOff(".timerSettings", "text");
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
    //Have to use currentTime.getHours again for futureHours because currentHours gets turned into a string down \/\/ there from 1am-9am and 1pm-9pm, and you end up with 081:24:00pm
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
