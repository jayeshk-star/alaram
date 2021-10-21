
var alHours = '';
var alMinutes = '';
var alarmTime = '';

function Timeclock() {
    var date = new Date();
    var hours = date.getHours() + '';
    var minutes = date.getMinutes() + '';
    var seconds = date.getSeconds() + '';
    var day = date.getDay();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    if (minutes == alMinutes && hours == alHours && date.getSeconds() < 5000) {
        playBeep();
    }
}
var count=0

function setAlrmTime() {
    var timeString = String(document.getElementById("alarmTimeSelect").value);
    alHours = timeString.charAt(0) + timeString.charAt(1);
    alMinutes = timeString.charAt(3) + timeString.charAt(4);
    document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes;
    alert ("you create successful alarm")
    count++
}

function snooze() {
    if(count<=3){
    if (alMinutes != '' || alHours != '') {

        var snoozMinutes = 10;
        if (Number(alMinutes) < 50) {
            snoozMinutes += Number(alMinutes);
            alMinutes = String(snoozMinutes);
            alHours = alHours;

        } else if (Number(alMinutes) >= 50) {
            snoozMinutes = (Number(alMinutes) + snoozMinutes) - 60;
            if (snoozMinutes === 0) {
                alMinutes = '00';
            } else {
                alMinutes = '0' + String(snoozMinutes);
            }

            alHours = Number(alHours) + 1;
            String(alHours);
        }

        document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes;

    }
}else{
    alert("you use 3 snooze")
}
}


function playBeep() {
    var audio = new Audio('audio');
    audio.src = " http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav";
    
    if(count<=3){
        audio.play()
    }else{
        audio.stop();
        alert("you use 3 snooze")
    
    }
}

Timeclock();
setInterval(Timeclock, 1000);