var currentTimeTab;
var futureTime;
var settingsOut = false;
var isUp = false;
var endTime;

// TODO: Clean-up repeated code in 'ready' and the click functions.

$(document).ready(function(){
  setInterval(updateClock, 1000);
  $(".buttonTimer").css('visibility', 'visible');
  $(".buttonTimer").mouseenter(function(){
    $(".buttonTimer").stop(false,false).fadeTo('fast' , 1);
  });
  $(".buttonTimer").mouseleave(function(){
    $(".buttonTimer").stop(false,false).fadeTo('fast' , 0.2);
  });
  $(".name").mouseenter(function(){
    $(".name").stop(false,false).fadeTo('slow' , 1);
  });
  $(".name").mouseleave(function(){
    $(".name").stop(false,false).fadeTo('slow' , 0.2);
  });
  $(".toggleHolder").mouseenter(function(){
    $(".toggleHolder").stop(false,false).fadeTo('fast' , 1);
  });
  $(".toggleHolder").mouseleave(function(){
    $(".toggleHolder").stop(false,false).fadeTo('fast' , 0.2);
  });
  $(".settingsHolder").mouseenter(function(){
    $(".settingsHolder").stop(false,false).fadeTo('fast' , 1);
  });
  $(".settingsHolder").mouseleave(function(){
    $(".settingsHolder").stop(false,false).fadeTo('fast' , 0.2);
  });
});

$(".buttonTimer").click(function(){
  if ( $(".toggleHolder").css('visibility', 'hidden')) {
      $(".toggleHolder").css('visibility', 'visible');
  }
  if ( $(".settingsHolder").css('visibility', 'hidden')) {
  $(".settingsHolder").css('visibility', 'visible');
}
  $(".timerClock").html(currentTimeTab);
  $(".timerEndClock").html(futureTime);
  if (isUp == false) {
    $(".timer").css('visibility', 'visible');
    $(".timerEnd").css('visibility', 'visible');
    $(".innerBoxTimer").css('visibility', 'visible');
    $(".timer").stop(false,false).animate({ top: '-100px' });
    $(".timerEnd").stop(false,false).animate({ top: '-100px' });
    $(".timer").css('box-shadow', '0px 0px 75px #3e84ad');
    $(".timerEnd").css('box-shadow', '0px 0px 75px #3e84ad');
    $(".timer").css('background-color', 'black');
    $(".timerEnd").css('background-color', 'black');
    $("timer").css('text-shadow', '0px 0px 40px #C774E8');
    $("timerEnd").css('text-shadow', '0px 0px 40px #C774E8');
    isUp = true;
    return;
  }
});

$(".buttonToggle").click(function(){
  if (isUp == false) {
    $(".timer").stop(false,false).animate({ top: '-100px' });
    $(".timerEnd").stop(false,false).animate({ top: '-100px' });
    $(".timer").css('box-shadow', '0px 0px 75px #3e84ad');
    $(".timerEnd").css('box-shadow', '0px 0px 75px #3e84ad');
    $(".timer").css('background-color', 'black');
    $(".timerEnd").css('background-color', 'black');
    $(".innerBoxTimer").css('visibility', 'visible');
    $("timer").css('text-shadow', '0px 0px 40px #C774E8');
    $("timerEnd").css('text-shadow', '0px 0px 40px #C774E8');
    isUp = true;
    return;
  }
  if (isUp == true){
    $(".timer").stop(false,false).animate({ top: '10px' });
    $(".timerEnd").stop(false,false).animate({ top: '10px' });
    $(".innerBoxTimer").css('visibility', 'hidden');
    $(".timer").css('box-shadow', '0px 0px 0px #3e84ad');
    $(".timerEnd").css('box-shadow', '0px 0px 0px #3e84ad');
    $(".timer").css('background-color', 'transparent');
    $(".timerEnd").css('background-color', 'transparent');
    $("timer").css('text-shadow', '0px 0px 0px #C774E8');
    $("timerEnd").css('text-shadow', '0px 0px 0px #C774E8');
    isUp = false;
    return;
  }
});

$(".buttonSettings").click(function(){
  if (settingsOut == false){
    $(".timerSettings").stop(false,false).animate({ right: '-225px' });
    $(".timerSettings").css('visibility', 'visible');
    $(".innerBoxSettings").css('visibility', 'visible');
    $(".timerSettings").css('background-color', 'black');
    $(".timerSettings").css('box-shadow', '0px 0px 75px #3e84ad');
    $(".timerSettings").css('text-shadow', '0px 0px 40px #C774E8');
    settingsOut = true;
    return;
  }
  if (settingsOut == true){
    $(".timerSettings").stop(false,false).animate({ right: '20px' });
    $(".innerBoxSettings").css('visibility', 'hidden');
    $(".timerSettings").css('background-color', 'transparent');
    $(".timerSettings").css('box-shadow', '0px 0px 0px #3e84ad');
    $(".timerSettings").css('text-shadow', '0px 0px 0px #C774E8');
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

    endTimeCheck();

    if (currentHours > 12 || futureHours > 12){
      currentHours = currentHours - 12;
      futureHours = futureHours -12;
    }

    if (currentHours == 0){
      currentHours = 12;
    }
    //Here                                                                                                 //<Over there
    if(currentHours < 10){
      currentHours = "0" + currentHours;
    }

    if (currentSeconds < 10){
      currentSeconds = "0" + currentSeconds;
    }

    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }

    if (futureMinutes > 60 ) {
      futureHours = futureHours + 1;
      futureMinutes = futureMinutes - 60;
      if (futureMinutes < 10) {
        futureMinutes = "0" + futureMinutes;
      }
    }

    if (futureMinutes == 60) {
      futureHours = futureHours + 1;
      futureMinutes = "00";
    }

    if (endTime == 60) {
      futureMinutes = currentMinutes;
    }

    if(futureHours < 10){
      futureHours = "0" + futureHours;
    }
    // TODO: Fix for when futureMinutes is between 61 and 69


    futureTime = futureHours + ":" + futureMinutes + ":" + currentSeconds;
    currentTimeTab = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  	var currentTimeHrMin = currentHours + ":" + currentMinutes;
    var currentTimeSec = currentSeconds;
   	$(".clockHM").html(currentTimeHrMin);
    $(".clockSec").html(currentTimeSec)
    $(".clockTab").html(currentTimeTab)
 }
