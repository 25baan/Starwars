document.addEventListener("DOMContentLoaded", function () {
    const audioElement = document.getElementById("background-audio");
    audioElement.volume = 0.15;
    let audioMuted = false;

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

    const iniciarMensagemButton = document.getElementById("iniciar-mensagem");
    const preMensagemDiv = document.querySelector(".pre-mensagem");

    iniciarMensagemButton.addEventListener("click", function () {
        preMensagemDiv.style.display = "none";
        mostrarTexto();

        // Inicie a reprodução da música ao clicar no botão "Iniciar Mensagem"
        audioElement.play();
    });

    const mensagem = document.querySelector('.mensagem');

    // Função para mostrar o texto
    function mostrarTexto() {
        mensagem.style.display = 'block';

        const texto = `Com a determinação de um Jedi, nosso herói escolheu a opção da Missão Furtiva. Reconheceu que a discrição e a obtenção de informações detalhadas sobre o Flagelo Estelar eram cruciais para o sucesso de sua missão. \n Ele se preparou cuidadosamente, usando sua conexão com a natureza e a Força para se camuflar enquanto se infiltrava nas linhas inimigas. Cada passo era calculado, cada movimento precisava ser perfeito. Ele sabia que o futuro de Veridion e de muitos outros planetas dependia dele. \n A missão furtiva o levou a lugares sombrios e perigosos, onde enfrentou testes de sua habilidade na Força e sua astúcia. Ele descobriu informações cruciais sobre o Flagelo Estelar, incluindo a localização exata da estação espacial onde a arma estava sendo construída.\n Com as informações cruciais sobre o Flagelo Estelar em mãos, nosso herói transmitiu os dados para a resistência. A notícia se espalhou rapidamente, e os líderes rebeldes se reuniram para traçar um plano de ataque preciso contra a estação espacial onde a arma de destruição em massa estava sendo construída. \n O ataque foi cuidadosamente planejado, com base nas informações detalhadas fornecidas pelo nosso herói. As forças rebeldes lançaram um ataque coordenado, aproveitando as fraquezas da estação espacial e pegando o Império de surpresa. \n A batalha que se seguiu foi intensa, com blasters disparando e sabres de luz brilhando. Nosso herói liderou o ataque com habilidade e coragem, usando sua conexão com a Força para enfrentar os adversários mais difíceis. \n Finalmente, após uma luta incansável, a estação espacial foi tomada. O Flagelo Estelar foi destruído, e a ameaça que pairava sobre Veridion e outros planetas foi eliminada. A galáxia celebrou a vitória da resistência. \n Nossa herói emergiu da batalha como uma líder valente e respeitada. Seu papel na destruição do Flagelo Estelar solidificou sua posição na resistência e inspirou outros a se juntarem à causa. Veridion começou a se recuperar dos danos causados pelo domínio imperial, e a esperança floresceu novamente.`;

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
                        digitarTexto();
                    }
                }

                digitarCaractere();
            } else if (index === paragrafos.length) {
                // Após a exibição completa da primeira frase, adicione a caixa de redirecionamento
                const redirecionamentoDiv = document.createElement('div');
                redirecionamentoDiv.className = 'redirecionamento';
                mensagem.appendChild(redirecionamentoDiv);

                const linkRedirecionamento = document.createElement('a');
                linkRedirecionamento.href = 'index.html'; // Substitua pelo seu link
                linkRedirecionamento.textContent = 'Voltar ao Início';
                redirecionamentoDiv.appendChild(linkRedirecionamento);

                // Adicione um evento de clique ao link de redirecionamento
                linkRedirecionamento.addEventListener('click', function () {
                    // Redirecione os usuários para o link especificado
                    window.location.href = linkRedirecionamento.href;
                });

                // Agora, adicione a caixa de redirecionamento para a galeria
                const redirecionamentoDivGaleria = document.createElement('div');
                redirecionamentoDivGaleria.className = 'redirecionamento'; // Usamos a mesma classe 'redirecionamento' para estilo semelhante
                mensagem.appendChild(redirecionamentoDivGaleria);

                const linkRedirecionamentoGaleria = document.createElement('a');
                linkRedirecionamentoGaleria.href = 'index galeria.html'; // Substitua pelo link da galeria
                linkRedirecionamentoGaleria.textContent = 'Galeria';
                redirecionamentoDivGaleria.appendChild(linkRedirecionamentoGaleria);

                // Adicione um evento de clique ao link de redirecionamento da galeria
                linkRedirecionamentoGaleria.addEventListener('click', function () {
                    // Redirecione os usuários para o link da galeria especificado
                    window.location.href = linkRedirecionamentoGaleria.href;
                });
            }
        }

        setTimeout(digitarTexto, 1000); // Adicione um atraso inicial para exibir a caixa de redirecionamento apenas após a primeira frase.
    }

    audioElement.addEventListener("canplaythrough", function () {
        audioElement.play();
    });

    setTimeout(function () {
        // Não inicia a mensagem automaticamente, apenas exibe o botão "Iniciar Mensagem"
    }, 1000);
});
