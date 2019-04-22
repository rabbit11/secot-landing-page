//Selecting text to be changed
var count = document.getElementById("countDown");
var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
//Setting the date we are counting down to
var countDownDate = new Date("August 26, 2019 09:00:00").getTime();

//Rate which we are decressing the count down
var rate = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
//     count.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = minutes;
    segundos.innerHTML = seconds;

}, 10);

$(function () {
        $(document).scroll(function () {
                var $nav = $(".navbar");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                $nav.toggleClass('navbar-dark', $(this).scrollTop() > $nav.height());
                // $nav.toggleClass('shadow-lg', $(this).scrollTop() > $nav.height());
                // $nav.toggleClass('border-bottom border-danger', $(this).scrollTop() > $nav.height());
        });
});

