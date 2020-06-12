const button = document.querySelector('button');
const text = document.querySelector('.text');
const imgBtn1 = document.querySelector('#image-button .img1');
const imgBtn2 = document.querySelector('#image-button .img2');
const countLikes1 = document.querySelector('.likes1');
const countLikes2 = document.querySelector('.likes2')

let imgCounter1 = 0;
let imgCounter2 = 0;

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



imgBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    
    imgCounter1 += 1;
    let temp = `${imgCounter1} Like(s)`;
    countLikes1.textContent = temp;
});

imgBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    
    imgCounter2 += 1;
    let temp1 = `${imgCounter2} Like(s)`;
    countLikes2.textContent = temp1;
});

