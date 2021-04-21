var timeLimit = 9;
var timer = setInterval(function () {
    time = document.getElementById('redirect-time');
    time.innerHTML = timeLimit;
    timeLimit--;
    if (timeLimit == -1) {
        redirectToOrigin();
    }
}, 1000)

function redirectToOrigin() {
    clearInterval(timer);
    window.location.assign("http://192.168.0.103/elemweb/");
}