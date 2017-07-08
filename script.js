var currentTimeTab;
var futureTime;
var isUp = false;

$(document).ready(function(){
  setInterval(updateClock, 1000);
  $(".buttonTimer").css('visibility', 'visible');
  $(".buttonTimer").mouseenter(function(){
    $(".buttonTimer").fadeTo('fast' , 1);
  });
  $(".buttonTimer").mouseleave(function(){
    $(".buttonTimer").fadeTo('fast' , 0.2);
  });
  $(".name").mouseenter(function(){
    $(".name").fadeTo('slow' , 1);
  });
  $(".name").mouseleave(function(){
    $(".name").fadeTo('slow' , 0.2);
  });
  $(".toggleHolder").mouseenter(function(){
    $(".toggleHolder").fadeTo('fast' , 1);
  });
  $(".toggleHolder").mouseleave(function(){
    $(".toggleHolder").fadeTo('fast' , 0.2);
  });
});

$(".buttonTimer").click(function(){
  $(".timerClock").html(currentTimeTab);
  $(".timerEndClock").html(futureTime);
  if (isUp == false) {
    $(".timer").css('visibility', 'visible');
    $(".timerEnd").css('visibility', 'visible');
    $(".timer").animate({ top: '-100px' });
    $(".timerEnd").animate({ top: '-100px' });
    isUp = true;
    return;
  }
});

$(".buttonToggle").click(function(){
  if (isUp == false) {
    $(".timer").animate({ top: '-100px' });
    $(".timerEnd").animate({ top: '-100px' });
    isUp = true;
    return;
  }
  if (isUp == true){
    $(".timer").animate({ top: '10px' });
    $(".timerEnd").animate({ top: '10px' });
    isUp = false;
    return;
  }
});

function updateClock ( ){
 	  currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );
    //Have to use currentTime.getHours again for futureHours because currentHours gets turned into a string down \/\/ there from 1am-9am and 1pm-9pm, and you end up with 081:24:00pm
    var futureHours = currentTime.getHours() + 1;
    var futureMinutes = currentMinutes + 5;

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

    if (futureMinutes < 10) {
      futureMinutes = "0" + futureMinutes;
    }

    if (futureMinutes >59 ) {
      futureMinutes = futureMinutes - 60;
      futureTime = futureHours + ":0" + futureMinutes + ":" + currentSeconds;
    }

    else{
      futureTime = currentHours + ":" + futureMinutes + ":" + currentSeconds;
    }
    currentTimeTab = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  	var currentTimeHrMin = currentHours + ":" + currentMinutes;
    var currentTimeSec = currentSeconds;
   	$(".clockHM").html(currentTimeHrMin);
    $(".clockSec").html(currentTimeSec)
    $(".clockTab").html(currentTimeTab)
 }
