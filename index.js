
var alaramHours = '';
var alarmMinutue = '';
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

    var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    var clock = week[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    if (minutes == alarmMinutue && hours == alaramHours && date.getSeconds() < 5000) {
        playAudio();
    }
}
var count = 0

function setAlrmTime() {
    var timeString = String(document.getElementById("alarmTimeSelect").value);
    alaramHours = timeString.charAt(0) + timeString.charAt(1);
    alarmMinutue = timeString.charAt(3) + timeString.charAt(4);
    document.getElementById("alarm").innerHTML = 'Alarm: ' + alaramHours + ':' + alarmMinutue;
    alert("you create successful alarm")
    count++
}

function snoozingTime() {
    if (count <= 3) {
        if (alarmMinutue != '' || alaramHours != '') {

            var snoozMinutes = 10;
            if (Number(alarmMinutue) < 50) {
                snoozMinutes += Number(alarmMinutue);
                alarmMinutue = String(snoozMinutes);
                alaramHours = alaramHours;

            } else if (Number(alarmMinutue) >= 50) {
                snoozMinutes = (Number(alarmMinutue) + snoozMinutes) - 60;
                if (snoozMinutes === 0) {
                    alarmMinutue = '00';
                } else {
                    alarmMinutue = '0' + String(snoozMinutes);
                }

                alaramHours = Number(alaramHours) + 1;
                String(alaramHours);
            }

            document.getElementById("alarm").innerHTML = 'Alarm: ' + alaramHours + ':' + alarmMinutue;

        }
    } else {
        alert("you use 3 snooze")
    }
}


function playAudio() {

    var audio = new Audio('audio');
    audio.src = " http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav";
    if (count <= 3) {
        audio.play();
    } else {
        audio.stop();
    }
}

Timeclock();
setInterval(Timeclock, 1000);