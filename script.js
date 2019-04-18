//Selecting text to be changed
count = document.getElementById("countDown");
//Setting the date we are counting down to
var countDownDate = new Date("August 26, 2019 08:00:00").getTime();

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
    count.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

}, 10);

