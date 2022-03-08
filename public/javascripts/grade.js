function grade(coin) {
    if (coin < 1) {
        return 1
    } else if (coin < 10) {
        return 2
    } else if (coin < 20) {
        return 3
    } else if (coin < 50) {
        return 4
    } else if (coin < 60) {
        return 5
    } else if (coin < 70) {
        return '5*'
    } else if (coin < 80) {
        return '5**'
    } else {
        return "invalide coin"
    }
}
const coin = parseInt(document.querySelector('#coin').innerText)
document.querySelector('#grade').innerText = grade(coin)