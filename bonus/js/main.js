const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// recupero il contenitore per i post dall'HTML
const postContainer = document.getElementById('container');

// creo la struttura HTML per ogni post utilizzando forEach
posts.forEach((post) => {

    // destrutturazione
    let { id, content, media, author, likes, created } = post;
    let {name, image} = author;

    let split = created.split('-')
    let data = `${split[2]}/${split[1]}/${split[0]}`;

    // aggiungo il post al contenitore
    postContainer.innerHTML +=
    `<div class="post">
        <div class="post-header">
            <div class="post-meta">
                <div class="post-meta__icon">
                <img class="profile-pic" src="${image}" alt="${name}">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${name}</div>
                <div class="post-meta__time">${data}</div>
            </div>
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#${id}" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>
    </div>`
});

// creo un array vuoto per gli ID dei post
let arrayId = [];

postContainer.addEventListener('click', function(event) {
    
    // dichiaro una variabile per il button dei likes
    const likeButtons = event.target.closest('.js-like-button');
        
    // controllo se il pulsante è già stato cliccato
    if (!likeButtons.classList.contains('like-button--liked')) {
        // se non è stato già cliccato aggiungo la classe "like-button--liked"
        likeButtons.classList.add('like-button--liked');
        
        // vado a recuperare l'ID del post tramite l'attributo "data-postid"
        const postId = likeButtons.getAttribute('data-postid');
        
        // recupero il counter del like dal DOM
        const likeCounter = document.getElementById(`like-counter-${postId}`);
        console.log(postId);
        
        // incremento il counter dei likes
        let currentLikes = parseInt(likeCounter.textContent);
        likeCounter.textContent = currentLikes + 1;

        // vado ad aggiungere gli ID dei post a cui viene messo like nell'array vuoto
        if (!arrayId.includes(postId)) {
            arrayId.push(postId);
            console.log(arrayId)
        }
    }
});

