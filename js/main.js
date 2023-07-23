const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const submit = document.querySelector('.card1__submit');
const ratings = document.querySelectorAll('.numbers_btn');
const rating = document.querySelector('.card2__rating--number');

ratings.forEach((element) => {
    element.addEventListener('click', () => {
        number = element.innerHTML;
        rating.innerHTML = number;
        submit.style.pointerEvents = 'visible';
        submit.style.cursor = 'pointer';
        submit.style.backgroundColor = 'rgb(251, 116, 19)';

    })
});

submit.addEventListener('click', () => {
    card1.style.display = 'none';
    card2.style.display = 'flex';
})