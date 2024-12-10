document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('question-modal');
    const modalQuestion = document.getElementById('modal-question');
    const modalAnswer = document.getElementById('modal-answer');
    const modalFeedback = document.getElementById('modal-feedback');
    const closeModalButton = document.getElementById('close-modal');
    const checkModalAnswerButton = document.getElementById('modal-check-answer');
  
    let currentCard = null;
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('disabled')) return;
  
        currentCard = card;
        modalQuestion.textContent = card.getAttribute('data-question');
        modalAnswer.value = '';
        modalFeedback.textContent = '';
        modalFeedback.classList.remove('green', 'red');
        modal.classList.remove('hidden');
      });
    });
  
    checkModalAnswerButton.addEventListener('click', () => {
      const correctAnswer = currentCard.getAttribute('data-answer').toLowerCase();
      const userAnswer = modalAnswer.value.trim().toLowerCase();
  
      currentCard.classList.add('disabled');
  
      if (userAnswer === correctAnswer) {
        currentCard.innerHTML += '<div class="status-icon green">✔</div>';
        modalFeedback.textContent = 'Correct!';
        modalFeedback.classList.add('green');
      } else {
        currentCard.innerHTML += '<div class="status-icon red">✘</div>';
        modalFeedback.innerHTML = `Wrong! Correct Answer: <strong>${currentCard.getAttribute('data-answer')}</strong>`;
        modalFeedback.classList.add('red');
      }
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  });
  