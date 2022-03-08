const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.classList.add('grey')
    })
}