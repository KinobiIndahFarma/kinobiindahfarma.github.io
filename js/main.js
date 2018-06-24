//Slick Carousel

$(document).ready(() => {
  $('.carousel').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 1000, 
   fade: true
 });
});


//Automatic Greeting

var greeting;
var time = new Date().getHours();
if (time < 11) {
    greeting = "Selamat pagi!";
} else if (time < 16) {
    greeting = "Selamat siang!";
} else if (time < 21) {
    greeting = "Selamat sore!";
} else {
    greeting = "Selamat malam!";
};
document.getElementById("greeting").innerHTML = greeting;


//Days Setting

var days = new Array(7);
days[0] = "Minggu";
days[1] = "Senin";
days[2] = "Selasa";
days[3] = "Rabu";
days[4] = "Kamis";
days[5] = "Jumat";
days[6] = "Sabtu";

var current_day = new Date();

var day_value = current_day.getDay();
var elDay = document.getElementById('day');
elDay.innerHTML = (days[day_value]);


//Time Setting

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = + h + ":" + m + ":" + s + " WIB";
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

//Functional Buttons

$(document).ready(() => {
    $('.arrow-one').on('click', event => {
    $('#button-one').toggleClass('rotate');
    $('.time-details-one').toggle().addClass('.schedule-one');
  });
});
   
$(document).ready(() => {
    $('.arrow-two').on('click', event => {
    $('#button-two').toggleClass('rotation');
    $('.time-details-two').toggle().addClass('.schedule-two');
    });
 });
      
 $(document).ready(() => {  
    $('.arrow-three').on('click', event => {
    $('#button-three').toggleClass('rotating');
    $('.time-details-three').toggle().addClass('.schedule-three');
    });
});