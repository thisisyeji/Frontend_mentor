const faqs = document.querySelectorAll('.card__faq');

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener('click', (event) => {
    const target = event.target.parentNode;
    const question = target.querySelector('.card__question');
    const answer = target.querySelector('.card__answer');
    const button = target.querySelector('button');

    question.classList.toggle('open');
    answer.classList.toggle('hidden');
    button.classList.toggle('arrowup');
  });
}
