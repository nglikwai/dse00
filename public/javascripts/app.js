const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.classList.add('grey')
    })
}

var currentTime = new Date().getHours();

if (currentTime > 23 || currentTime < 7) {
    document.querySelector('body').style.backgroundColor = 'rgba(255, 252, 248, 0.7)';
    const cards = document.querySelectorAll('.card');
    for (let card of cards) {
        card.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }


}