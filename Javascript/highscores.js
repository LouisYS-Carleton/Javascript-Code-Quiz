let scoresString = localStorage.getItem('scores')
let scoresArray = JSON.parse(scoresString)
document.getElementById('highscoresTable').textContent = ''

if (scoresArray) {
    for (let i = 0; i < scoresArray.length; i++) {
        let highscoresParagraph = document.createElement('p')
        highscoresParagraph.textContent = scoresArray[i]
        document.getElementById('highscoresTable').append(highscoresParagraph)
    }
}

document.getElementById('clear-highscores').addEventListener('click', function() {
    document.getElementById('highscoresTable').textContent = ''
    localStorage.removeItem('scores')
})
