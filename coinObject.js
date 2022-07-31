const corpo  = document.body;

function telaInicial() {
    const boxBotoes = document.createElement('section');
    const titulo = document.createElement('h1');
    const botaoTexto = document.createElement('button');
    const botaoImg = document.createElement('button');

    boxBotoes.classList.add('boxBotoes');
    titulo.classList.add('boxBotoes__titulo');
    titulo.innerText = 'Jogando a Moeda 20 Vezes...'
    botaoTexto.classList.add('boxbotoes__botaoTexto', 'botao');
    botaoTexto.innerText = 'Texto...';
    botaoImg.classList.add('boxbotoes__botaoImg', 'botao');
    botaoImg.innerText = 'Imagem...';

    boxBotoes.append(titulo, botaoTexto, botaoImg);
    corpo.append(boxBotoes);

    botaoTexto.addEventListener('click', display20Flips);
    botaoImg.addEventListener('click', display20Images);
};

const coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random());
        return this.state;
    },
    toString: function () {
        if (this.flip() === 0) {
            return 'Heads';
        } else {
            return 'Tails';
        };
    },
    toHTML: function () {
        const image = document.createElement("img");

        this.toString() === 'Heads' ? image.src = './images/heads.png' : image.src = './images/tails.png';
        image.alt = 'Heads/Tails';
        image.classList.add('container__img');

        return image;
    },
};


function exibeTextoDin(arr) {
    const container = document.createElement('section');
    const texto = document.createElement('p');

    corpo.innerHTML = '';
    telaInicial();
    container.classList.add('container');
    texto.classList.add('container__texto');
    texto.innerText = arr.join(' - ');

    container.append(texto);
    corpo.append(container);
};

function display20Flips() {
    const results = [];

    for (let i = 0; i < 20; i++){
        let jogada = coin.toString();
        results.push(jogada);
    };

    exibeTextoDin(results);

    return results;
};

function exibeImagensDin(arr) {
    const container = document.createElement('section');
    const caixaImagens = document.createElement('section');

    corpo.innerHTML = '';
    telaInicial();
    container.classList.add('container');
    caixaImagens.classList.add('container__caixaImagens');

    corpo.append(container);
    container.append(caixaImagens);

    arr.forEach((element, index) => {
        setTimeout(() => {
            caixaImagens.append(element);
        }, (index + 1) * 1200);
    });
};

function display20Images() {
    const results = [];

    for (let i = 0; i < 20; i++) {
        let jogada = coin.toHTML();
        results.push(jogada);
    };

    exibeImagensDin(results);

    return results;
};


telaInicial();