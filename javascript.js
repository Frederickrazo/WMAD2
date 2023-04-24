

const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer');
const resultElement = document.getElementById('result');

answerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const answer = Number(answerInput.value);
  if (answer === 12) {
    resultElement.innerHTML = 'Correct!';
    resultElement.style.color = 'green';
  } else {
    resultElement.innerHTML = 'Incorrect. The answer is 12.';
    resultElement.style.color = 'red';
  }
});
