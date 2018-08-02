$(function() {
    $('.navbar a, .top__link').mPageScroll2id({
        scrollSpeed: 1700
    });

    let timer = (value) => {
        let str = String(value);
        return (value < 10 && str.length === 1) ? "0"+value : value;
    };
    function clock() {
        let days = document.getElementById('timer-days').innerHTML;
        let hours = document.getElementById('timer-hours').innerHTML;
        let minutes = document.getElementById('timer-minutes').innerHTML;
        let seconds = document.getElementById('timer-seconds').innerHTML;
        let end = false;

        if (seconds > 0)
            seconds--;
        else {
            seconds = 59;

            if (minutes > 0) minutes--;
            else {
                seconds = 59;
                minutes = 59;

                if (hours > 0) hours--;
                else {
                    seconds = 59;
                    minutes = 59;
                    hours = 23;

                    if (days > 0) days--;
                    else end = true;
                }
            }
        }

        if (end) {
            clearInterval(intervalID);
            alert("Время акции вышло");
        }

        document.getElementById('timer-days').innerHTML = timer(days);
        document.getElementById('timer-hours').innerHTML = timer(hours);
        document.getElementById('timer-minutes').innerHTML = timer(minutes);
        document.getElementById('timer-seconds').innerHTML = timer(seconds);
    }

    window.intervalID = setInterval(clock, 1000);
});