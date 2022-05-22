const buttons = document.querySelectorAll('.disappear-button');
const typing = document.querySelector('#typing');

document.addEventListener('keydown', () => typing.innerHTML = 'typing...')
document.addEventListener('keyup', () =>
    setTimeout(() => {
        typing.innerHTML = 'Online'
    }, 1000))
for (let button of buttons) {
    button.addEventListener('click', function () {
        button.classList.add('grey')
    })
}

var currentTime = new Date().getHours();

// if (currentTime > 23 || currentTime < 7) {
//     var lnk = document.createElement('link');
//     lnk.type = 'text/css';
//     lnk.href = '/stylesheets/app-night.css';
//     lnk.rel = 'stylesheet';
//     document.getElementsByTagName('head')[0].appendChild(lnk);
// }

