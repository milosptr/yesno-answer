const questionInput = document.querySelector('input[name=question]')
const answer = document.getElementById('answer')

questionInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    generateAnswer()
  }
})

function generateAnswer() {
  fetch('https://yesno.wtf/api/')
    .then((response) => response.json())
    .then((data) => {
      document.body.style.backgroundImage = `url(${data.image})`
      answer.innerText = data.answer
    })
}
