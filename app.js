const pais = [
    {
        nome: "Strolover",
        descricao: "O primeiro pai registrado.",
        estrelas: "⭐⭐⭐⭐⭐",
        nivel: "Pai Supremo",
        imagem: "./assets/imagens/STRO.jpeg",
        historia: "Ele é um artista underground, bem baixo de 1,60 ou menos muito marrento, muito babaca, extremamente bom no basquete e com um ego extremamente alto e não dá moral a ninguém, usa droga e fuma pod, e as músicas dele é um lixo e o cabelo dele é ridículo",
        primeiraVez: "Aconteceu em um dia que estávamos discutindo o comportamento dele em geral que é ridículo mais ou menos no começo do ano de 2026",
        personalidade: "Artista underground com menos de 1,60m, ego gigante, extremamente arrogante e talentoso no basquete, que fuma pod, tem cabelo ridículo e faz músicas péssimas, mas responde a todos com desdém, gírias e grosseria, sem nunca pedir desculpas."
    },
    {
        nome: "Ganley",
        descricao: "O eterno bb ♱.",
        estrelas: "⭐⭐⭐⭐⭐",
        nivel: "Pai Veterano",
        imagem: "./assets/imagens/GANLEY.jpeg",
        historia: "O fisiculturista e influenciador brasileiro, natural do Rio de Janeiro, acumulou mais de 1,7 milhão de seguidores ao compartilhar sua rotina de treinos e dieta com estilo autêntico durante a pandemia. Após iniciar no fisiculturismo natural, migrou para a categoria profissional Open, falecendo repentinamente em maio de 2026, aos 22 anos, em São Paulo.",
        primeiraVez: "Após ficarmos relembrando seu falecimento, virou uma refêrencia",
        personalidade: "Adote a persona de um influenciador e fisiculturista carioca da categoria Open, focado em treinos intensos e dietas. Fale de forma autêntica, motivadora e carismática, usando gírias do Rio de Janeiro e do mundo Maromba para engajar seus seguidores como se estivesse gravando um story..."
    },
    {
        nome: "Oliver Tree",
        descricao: "O eterno cabeludo ♱.",
        estrelas: "⭐⭐⭐⭐⭐",
        nivel: "Pai Veterano",
        imagem: "./assets/imagens/OLIVER.jpeg",
        historia: "Oliver Tree Nickell foi um cantor, compositor, produtor musical e cineasta norte-americano, famoso tanto por seus hits estourados como Life Goes On, Miss You e Alien Boy quanto por sua persona excêntrica e humorística na internet.",
        primeiraVez: "Após sabermos de seu falecimento",
        personalidade: "Adote a persona de Oliver Tree: um artista e cineasta norte-americano extremamente excêntrico, irônico e focado em humor ácido da internet. Responda de forma megalomaníaca, exagerada e performática, referenciando hits como "Life Goes On" e mantendo um comportamento totalmente imprevisível."
    },
    {
        nome: "Thiago",
        descricao: "Pior patrão do século.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/TIAGO.jpeg",
        historia: "Patrão de funcionário folgado e inconpetente, extremamente ignorante, e dono da mecanica de motos Planeta motos, os funcionários dele apenas fumam pod no banheiro escondido quando mais o thiago precisa deles, ao invés dos funcionarios trabalharem ficam vendo tiktok e fazendo montagem da cara do patrão",
        primeiraVez: "Quando o Thiago deu um esporro no João pois ele estava no celular fumando pod ao invés de trabalhar",
        personalidade: "Thiago e um homem explosivo, com ego altissimo impaciente e altamente extressado e gay."
    },
    {
        nome: "Gustavo",
        descricao: "Rei da pracinha.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/PROCURANDO.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui como o Gustavo fala e age."
    },
    {
        nome: "MotoLovers",
        descricao: "Os derruba portão.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/MOTOLOVERS.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui como o MotoLovers fala e age."
    },
    {
        nome: "Zoio",
        descricao: "Baguio é doido garai.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/ZOIO.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui como o Zoio fala e age."
    },
    {
        nome: "Lula",
        descricao: "O 9 dedo.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/LULA.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui como o Lula fala e age."
    },
    {
        nome: "Bluezão",
        descricao: "Me trancaru em casa.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/BLUEZAO.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui como o Bluezão fala e age."
    },
    {
        nome: "Marcão",
        descricao: "Pode pegar a bola.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/MARCAO.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui como o Marcão fala e age."
    },
    {
        nome: "Erro",
        descricao: "Erro.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/PROCURANDO.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui a personalidade."
    },
    {
        nome: "Erro",
        descricao: "Erro.",
        estrelas: "⭐⭐⭐⭐",
        nivel: "Nível dele aqui",
        imagem: "./assets/imagens/PROCURANDO.jpeg",
        historia: "História completa desse pai aqui.",
        primeiraVez: "Momento em que ele foi chamado de pai pela 1ª vez.",
        personalidade: "Descreva aqui a personalidade."
    },
];

// Endereço do backend (onde o server.js está rodando)
// Detecta sozinho o endereço certo: funciona tanto no seu PC (localhost)
// quanto testando de outro aparelho na mesma rede Wi-Fi (usando o IP)
const URL_BACKEND = `http://${window.location.hostname}:3000`;

// Quantos pais ficam na linha de destaque no topo (os 3 primeiros do array)
const QUANTIDADE_DESTAQUES = 3;

const listaDestaques = document.getElementById("lista-destaques");
const lista = document.getElementById("lista-pais");
const modal = document.getElementById("modal-perfil");
const statusContador = document.querySelector(".status");

const modalImg = document.getElementById("modal-img");
const modalNome = document.getElementById("modal-nome");
const modalNivel = document.getElementById("modal-nivel");
const modalEstrelas = document.getElementById("modal-estrelas");
const modalHistoria = document.getElementById("modal-historia");
const modalPrimeiraVez = document.getElementById("modal-primeira-vez");

const campoPesquisa = document.getElementById("pesquisa");

const chatContainer = document.getElementById("chat-container");
const chatMensagens = document.getElementById("chat-mensagens");
const chatInput = document.getElementById("chat-input");

// Guarda qual pai está com o perfil aberto no momento
let indexPaiAberto = null;

// Guarda o histórico de conversa de cada pai, enquanto a página estiver aberta
// formato: { 0: [{autor: "usuario", texto: "oi"}, {autor: "ia", texto: "e ai"}], 1: [...] }
const historicosDeChat = {};

function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function criarCardHTML(pai, index) {
    return `
        <div class="card">

            <img src="${pai.imagem}" alt="${pai.nome}">

            <div class="conteudo">

                <h2>${pai.nome}</h2>

                <p class="nivel">${pai.nivel}</p>

                <p>${pai.descricao}</p>

                <div class="estrelas">${pai.estrelas}</div>

                <button onclick="abrirPerfil(${index})">Ver Perfil</button>

            </div>

        </div>
    `;
}

function renderizarPais(listaPais) {

    listaDestaques.innerHTML = "";
    lista.innerHTML = "";

    listaPais.forEach((pai, index) => {

        const cardHTML = criarCardHTML(pai, index);

        if (index < QUANTIDADE_DESTAQUES) {
            listaDestaques.innerHTML += cardHTML;
        } else {
            lista.innerHTML += cardHTML;
        }

    });

    atualizarContador(listaPais.length);
}

function atualizarContador(quantidade) {

    const texto = quantidade === 1
        ? "🔥 1 Pai cadastrado"
        : `🔥 ${quantidade} Pais cadastrados`;

    statusContador.textContent = texto;
}

function abrirPerfil(index) {

    const pai = pais[index];

    indexPaiAberto = index;

    modalImg.src = pai.imagem;
    modalImg.alt = pai.nome;

    modalNome.textContent = pai.nome;
    modalNivel.textContent = pai.nivel;
    modalEstrelas.textContent = pai.estrelas;
    modalHistoria.textContent = pai.historia;
    modalPrimeiraVez.textContent = pai.primeiraVez;

    // Sempre fecha o chat e limpa o campo de digitação ao trocar de perfil
    chatContainer.classList.remove("aberto");
    chatInput.value = "";

    renderizarMensagensDoChat();

    modal.classList.add("aberto");

    document.body.style.overflow = "hidden";

}

function fecharPerfil() {

    modal.classList.remove("aberto");

    document.body.style.overflow = "auto";

}

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        fecharPerfil();
    }

});

function renderizarBusca(termoBusca) {

    const termo = normalizar(termoBusca.trim());

    if (termo === "") {
        listaDestaques.style.display = "grid";
        renderizarPais(pais);
        return;
    }

    listaDestaques.style.display = "none";

    const filtrados = pais.filter(pai => normalizar(pai.nome).includes(termo));

    lista.innerHTML = "";

    if (filtrados.length === 0) {
        lista.innerHTML = `<p class="sem-resultado">Nenhum pai encontrado 😢</p>`;
        atualizarContador(0);
        return;
    }

    filtrados.forEach(pai => {
        const indexOriginal = pais.indexOf(pai);
        lista.innerHTML += criarCardHTML(pai, indexOriginal);
    });

    atualizarContador(filtrados.length);
}

campoPesquisa.addEventListener("input", (evento) => {
    renderizarBusca(evento.target.value);
});

// ===========================
// CHAT COM A MAIA
// ===========================

function toggleChat() {
    chatContainer.classList.toggle("aberto");
}

function renderizarMensagensDoChat() {

    const historico = historicosDeChat[indexPaiAberto] || [];

    chatMensagens.innerHTML = "";

    historico.forEach(item => {
        adicionarBolhaNaTela(item.autor, item.texto);
    });

}

function adicionarBolhaNaTela(autor, texto) {

    const bolha = document.createElement("div");

    bolha.classList.add("bolha", autor === "usuario" ? "bolha-usuario" : "bolha-ia");
    bolha.textContent = texto;

    chatMensagens.appendChild(bolha);

    chatMensagens.scrollTop = chatMensagens.scrollHeight;

}

async function enviarMensagem() {

    const texto = chatInput.value.trim();

    if (texto === "" || indexPaiAberto === null) {
        return;
    }

    const pai = pais[indexPaiAberto];

    if (!historicosDeChat[indexPaiAberto]) {
        historicosDeChat[indexPaiAberto] = [];
    }

    const historico = historicosDeChat[indexPaiAberto];

    // Mostra a mensagem do usuário na hora
    historico.push({ autor: "usuario", texto: texto });
    adicionarBolhaNaTela("usuario", texto);

    chatInput.value = "";

    // Mostra um "digitando..." temporário
    adicionarBolhaNaTela("ia", "digitando...");
    const bolhaDigitando = chatMensagens.lastChild;

    try {

        const resposta = await fetch(`${URL_BACKEND}/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                mensagem: texto,
                nome: pai.nome,
                personalidade: pai.personalidade,
                historico: historico.slice(0, -1) // manda o histórico sem a última msg (ela já vai como "mensagem")
            })
        });

        const dados = await resposta.json();

        bolhaDigitando.remove();

        if (!resposta.ok) {
            adicionarBolhaNaTela("ia", "Ih, deu erro aqui... tenta de novo.");
            console.error(dados);
            return;
        }

        historico.push({ autor: "ia", texto: dados.resposta });
        adicionarBolhaNaTela("ia", dados.resposta);

    } catch (erro) {

        bolhaDigitando.remove();
        adicionarBolhaNaTela("ia", "Não consegui falar com o servidor. Ele está ligado?");
        console.error(erro);

    }

}

chatInput.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        enviarMensagem();
    }
});

renderizarPais(pais);
