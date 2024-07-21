// Milestone 2 

// creo l'array
const Images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

const ContainerImg = document.querySelector('.containerimg');

// ciclo per far apparire le img
for (let i =0; i < Images.length; i++) {

    if (i == 0) {
        ContainerImg.innerHTML += `<img src="${Images[i]}" class="active">`;
    }

    else {
        ContainerImg.innerHTML += `<img src="${Images[i]}">`;
    }

}

// click bottone

let ActiveImg = Images[0];

const ButtonImg = document.getElementsByClassName('.btn-container');

ButtonImg.addEventListener('click', function() {

    document.querySelector('.containerimg img').classList.remove('active');

    ActiveImg++;

    document.querySelector('.containerimg img').classList.add('active');

});

