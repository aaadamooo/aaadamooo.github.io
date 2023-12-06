let currentQuestionIndex = 0;
const questionText = document.getElementById('questionText');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');

function loadQuestion() {
  fetch('questions1.json')
    .then(response => response.json())
    .then(data => {
      const questionsData = data;

      const currentQuestion = questionsData.questions[currentQuestionIndex];
      questionText.textContent = currentQuestion.question;
      option1.textContent = currentQuestion.options[0];
      option2.textContent = currentQuestion.options[1];
      option3.textContent = currentQuestion.options[2];
      option4.textContent = currentQuestion.options[3];
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  if (!selectedOption) {
    alert('Wybierz odpowiedź: ');
    return;
  }

  const answer = selectedOption.value;
  fetch('questions1.json')
    .then(response => response.json())
    .then(data => {
      const questionsData = data;

      const correctAnswer = questionsData.questions[currentQuestionIndex].correctAnswer;
      if (answer === correctAnswer) {
        alert('Poprawna odpowiedź');
      } else {
        alert(`Zła odpowiedź, poprawna to : ${correctAnswer.toUpperCase()}.`);
        currentQuestionIndex--;
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < questionsData.questions.length) {
        loadQuestion();
      } else {
        alert('Quiz ukończony.');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Load the first question
loadQuestion();