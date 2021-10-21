
var alaraminHours = '';
var alaraminMinutes = '';
var alarmTime = '';

function updatedClock() {
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

    if (minutes == alaraminMinutes && hours == alaraminHours && date.getSeconds() < 5000) {
        playBeep();
    }
}
var count = 0

function setAlrmTime() {
    var timeString = String(document.getElementById("alarmTimeSelect").value);
    alaraminHours = timeString.charAt(0) + timeString.charAt(1);
    alaraminMinutes = timeString.charAt(3) + timeString.charAt(4);
    document.getElementById("alarm").innerHTML = 'Alarm: ' + alaraminHours + ':' + alaraminMinutes;
    count++
    if(count<=3){
        
        alert("you create successful alarm")
    }else{
        alert ("you can't create alaram your snooze is done already")
    }
}

function snooze() {
    if (count <= 3) {
        if (alaraminMinutes != '' || alaraminHours != '') {

            var snoozMinutes = 10;
            if (Number(alaraminMinutes) < 50) {
                snoozMinutes += Number(alaraminMinutes);
                alaraminMinutes = String(snoozMinutes);
                alaraminHours = alaraminHours;

            } else if (Number(alaraminMinutes) >= 50) {
                snoozMinutes = (Number(alaraminMinutes) + snoozMinutes) - 60;
                if (snoozMinutes === 0) {
                    alaraminMinutes = '00';
                } else {
                    alaraminMinutes = '0' + String(snoozMinutes);
                }

                alaraminHours = Number(alaraminHours) + 1;
                String(alaraminHours);
            }

            document.getElementById("alarm").innerHTML = 'Alarm: ' + alaraminHours + ':' + alaraminMinutes;

        }
    } else {
        alert("you use 3 snooze")
    }
}


function playBeep() {
    var audio = new Audio('audio');
    audio.src = " http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav";

    if (count <= 3) {
        audio.play()
    } else {
        audio.stop();
        alert("you use 3 snooze")

    }
}

updatedClock();
setInterval(updatedClock, 1000);