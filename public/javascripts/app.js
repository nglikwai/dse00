const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.classList.add('grey')
    })
}

var currentTime = new Date().getHours();

if (currentTime > 23 || currentTime < 7) {
    // document.querySelector('body').style.backgroundColor = 'rgba(255, 252, 248, 0.7)';
    document.querySelector('body').style.backgroundImage = 'url("http://3.bp.blogspot.com/-8CHSBu1Z0X8/XBKneFT-L_I/AAAAAAAAOmI/33B6cqn86EcpGk_E7h9dBl3m7UlU40eAQCK4BGAYYCw/s1600/night.jpg.png")';

    document.querySelector('body').style.backgroundColor = '#070f16'
    document.querySelector('nav').style.backgroundColor = 'transparent';
    const cards = document.querySelectorAll('.card');
    for (let card of cards) {
        card.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
    const texts = document.querySelectorAll('.night-text');
    for (let text of texts) {
        text.style.color = '#888';
    }
    document.querySelector('.user-info').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';


}