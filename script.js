const slideContens = [
    {
        id: 1,
        bg_color: 'blue',
        title: 'Slide One'
    },
    {
        id: 2,
        bg_color: 'red',
        title: 'Slide Two'
    },
    {
        id: 3,
        bg_color: 'green',
        title: 'Slide Three'
    },
    {
        id: 4,
        bg_color: 'orange',
        title: 'Slide Four'
    }
]

let index = 0

const changeSlide = (i) => {
    index = i
    let bullets = document.querySelectorAll('.navigation_bullet');
    bullets.forEach(bullet => {
        bullet.classList.remove('active');
    })
    bullets[i].classList.add('active');
    showSlides(index)
}

const goForward = () => {
    index++;

    if(index > slideContens.length - 2){
        index = slideContens.length - 2;
        return false;
    }

    showSlides(index);
    let bullets = document.querySelectorAll('.navigation_bullet');
    bullets.forEach(bullet => {
        bullet.classList.remove('active');
    })
    bullets[index].classList.add('active');
}
const goBack = () => {
    index--;

    if(index < 0){
        index = 0;
        return false;
    }

    showSlides(index);
    let bullets = document.querySelectorAll('.navigation_bullet');
    bullets.forEach(bullet => {
        bullet.classList.remove('active');
    })
    bullets[index].classList.add('active');
}


const createBullets = () => {
    let bullets = '<span class="navigation_bullet active" onclick="changeSlide(0)"></span>';

    const bullte_qantity = slideContens.length - 2;
    for(let i = 1; i<= bullte_qantity; i++){
        bullets += `
                <span class="navigation_bullet" onclick="changeSlide(${i})"></span>
            `
    }
    document.querySelector('.bullets').innerHTML = bullets;
    return false;
}
createBullets();



const showSlides = (start) => {
    let slides = '';
    const finalSlides = slideContens.slice(start, start + 2);
    console.log(finalSlides)
    finalSlides.forEach(slide => {
        slides += `<div class="slide" style="background-color:${slide.bg_color}">
                    <h1>${slide.title}</h1>
                </div>`
    })
    document.querySelector('.slider_wrapper').innerHTML = slides;
}

showSlides(index);