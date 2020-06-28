const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const currentImg = document.querySelector('.main-img');
const images = document.querySelectorAll('.imgs');

const opacity = 0.4;
imgs[0].style.opacity = opacity;


document.addEventListener('DOMContentLoaded', getImage);
document.addEventListener('DOMContentLoaded', fetchImage);

async function getImage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const data = await res.json();
    current.src = data[0].url;
}

async function fetchImage() {
    let output = null;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/`);
    const data = await res.json();
    for(let i=0; i<imgs.length;i++){
        imgs[i].src = data[i].url;
    }
}


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));


    //Change current image to src of clicked image
    current.src = e.target.src;

    //change the opacity to opacity var
    e.target.style.opacity = opacity;
}
