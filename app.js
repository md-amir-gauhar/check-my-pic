const button = document.querySelector('button');
const text = document.querySelector('.text');
const imgBtn = document.querySelector('#image-button img');
const likes = document.querySelector('.likes');

let Lcount = 0;

button.addEventListener('click', e => {
    e.preventDefault();
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickCount) {
            localStorage.clickCount = Number(localStorage.clickCount)+1;
        } else {
            localStorage.clickCount = 1;
        }

        let html = `<span>You have clicked the button ${localStorage.clickCount} time(s)</span>`;
        text.innerHTML = html;
    }
});



imgBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    Lcount += 1;
    let temp = `${Lcount} Likes`;
    likes.textContent = temp;
});

