const postar = document.querySelector('button');
const textarea = document.querySelector('textarea');

function imprimirConsole(event) {
    event.preventDefault();
    
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

function criarTweet(tweetTexto) {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    const tweet = {
        nome: 'Mave',
        avatar: './assets/img/avatar.png',
        user: '@justmavenn',
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTweet(tweet)
}

function listarTweet(tweet) {
    
}