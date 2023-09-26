document.addEventListener("DOMContentLoaded", function () {
    const audioElement = document.getElementById("background-audio");
    audioElement.volume = 0.15;
    let audioMuted = false;

    const inputNome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const labelNome = document.querySelector('label[for="nome"]');
    const soundButton = document.getElementById("sound-button");

    soundButton.addEventListener("click", function () {
        if (audioElement.paused) {
            audioElement.play();
            soundButton.src = "https://cdn.discordapp.com/attachments/823957677976846417/1154570609150402641/Com_som.png";
            audioMuted = false;
        } else {
            audioElement.pause();
            soundButton.src = "https://cdn.discordapp.com/attachments/823957677976846417/1154570609456594985/Sem_som.png";
            audioMuted = true;
        }
    });

    inputNome.addEventListener('click', function() {
        if (!audioMuted) {
            audioElement.play();
        }
    });

    inputNome.addEventListener('keyup', function(e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            mostrarNome();
        }
    });

    function mostrarNome() {
        var nome = inputNome.value;
        labelNome.style.display = "none";
        inputNome.style.display = "none";
        
        mensagem.innerHTML = ""; // Limpar mensagem anterior
    
        const texto = `Em um planeta remoto chamado Veridion, nascia ${nome}. Sua pele verde profundo, assimilada com as folhas das densas florestas, o tornava praticamente invisível. Os olhos de ${nome} brilhavam em verde intenso, uma manifestação de sua profunda conexão com a Força. \n Desde cedo, ${nome} demonstrou uma conexão extraordinária com a natureza e a Força. Ele podia sentir a vida em todas as criaturas ao seu redor e aprendera a comunicar-se com animais e plantas. Seu planeta natal, Veridion, estava em paz, mas isso estava prestes a mudar. \n O Império Galáctico começou a expandir seu domínio, e Veridion não escapou de sua ganância. ${nome} viu sua casa ser devastada e sua família ser separada. Determinado a resistir, ele começou a treinar em segredo, aprofundando sua compreensão da Força. \n Em um encontro com um eremita Jedi escondido, ${nome} descobriu seu verdadeiro destino. O eremita começou a treiná-lo nas antigas tradições Jedi. ${nome} abraçou seu treinamento com dedicação implacável e se destacou como um líder e guerreiro formidável. \n À medida que a luta contra o Império Galáctico se intensificava, ${nome} se destacava cada vez mais. Sua capacidade de usar a natureza ao seu favor era uma vantagem significativa. Ele compreendia que não se tratava de raiva contra o Império, mas sim de proteger o que amava: sua família, seu planeta e a paz que conhecera. \n O futuro de ${nome} permanecia incerto, com sua jornada pronta para moldar os destinos de muitos e inspirar a esperança em um momento de escuridão. Ele teria que decidir se seguiria o caminho Jedi ou continuaria liderando a resistência em Veridion, buscando um equilíbrio entre a paz e a liberdade para seu planeta.`; // Seu texto aqui
    
        const paragrafos = texto.split('\n');
    
        let index = 0;
        const velocidadeDigitacao = 30;
    
        function digitarTexto() {
            if (index < paragrafos.length) {
                const p = document.createElement('p');
                mensagem.appendChild(p);
    
                let charIndex = 0;
                const paragrafo = paragrafos[index];
                const paragrafoLength = paragrafo.length;
    
                function digitarCaractere() {
                    if (charIndex < paragrafoLength) {
                        p.textContent += paragrafo.charAt(charIndex);
                        charIndex++;
                        setTimeout(digitarCaractere, velocidadeDigitacao);
                    } else {
                        index++;
                        setTimeout(digitarTexto, velocidadeDigitacao);
                    }
                }
    
                digitarCaractere();
            } else {
                // Após a animação do texto, exibir a imagem e o link para o site
                const imagem1 = document.createElement('img');
                imagem1.src = 'https://cdn.discordapp.com/attachments/823957677976846417/1154570374848200795/Sabres.png';
                imagem1.classList.add('imagem-canto-esquerdo'); // Adicione uma classe

                const linkParaSite1 = document.createElement('a');
                linkParaSite1.href = 'file:///C:/Users/gabriel/Documents/Programação/pagina%20inicial/index%20caminho%20A.html';
                linkParaSite1.appendChild(imagem1);
                mensagem.appendChild(linkParaSite1);

// Adicionar a segunda imagem e link
                const imagem2 = document.createElement('img');
                imagem2.src = 'https://cdn.discordapp.com/attachments/823957677976846417/1154570375372476507/resistencia-removebg-preview.png';
                imagem2.classList.add('imagem-canto-direito'); // Adicione uma classe

                const linkParaSite2 = document.createElement('a');
                linkParaSite2.href = 'https://fast.com/pt';
                linkParaSite2.appendChild(imagem2);
                mensagem.appendChild(linkParaSite2);
            }
        }
    
            digitarTexto();
    }    
});
