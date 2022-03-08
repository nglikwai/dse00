const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.classList.add('grey')
        setTimeout(function() {
            button.classList.remove('grey')
        }, 1000);
    })
}

var currentTime = new Date().getHours();

if (currentTime > 23 || currentTime < 7) {
    var lnk = document.createElement('link');
    lnk.type = 'text/css';
    lnk.href = '/stylesheets/app-night.css';
    lnk.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(lnk);
}