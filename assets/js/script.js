const postar = document.querySelector('button');
const textarea = document.querySelector('textarea');
const feed = document.querySelector('.conteudoPrincipal__listaTweets')



function pegarTweet(event) {
    event.preventDefault();
    
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

postar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto) {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    minutos = minutos < 10 ? '0' + minutos : minutos;

    const tweet = {
        nome: 'Mave',
        avatar: './assets/img/avatar.png',
        user: '@justmavenn',
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet)
}

function listarTemplateTweet(tweet) {
    
    const {nome, avatar, user, texto, tempo} = tweet;

    let li = document.createElement('li');
    li.classList.add('conteudoPrincipal__listaTweets')
    
    let img = document.createElement('img');
    img.src = avatar;
    img.classList.add('tweet__avatar');

    let div = document.createElement('div');
    div.classList.add('tweet__conteudo');
    let h2 = document.createElement('h2');
    h2.innerText = nome;
    let span = document.createElement('span');
    span.innerText = `${user} · ${tempo}`
    let p = document.createElement('p');
    p.innerText = texto

    li.appendChild(img);
    li.appendChild(div);
    
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    feed.appendChild(li)
    textarea.value = ""

}
