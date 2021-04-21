const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // Get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
};
