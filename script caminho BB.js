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

        const texto = `Com determinação inabalável, nosso herói escolhe liderar a carga final contra o Flagelo Estelar. Convoca a resistência de Veridion e coordena um ataque desesperado à estação espacial onde a arma de destruição em massa do Império estava guardada. Cada rebelde estava disposto a dar sua vida para salvar seu planeta natal. \n A batalha que se seguiu foi épica e feroz. Nossa heroína/heroí, com sua habilidade na Força e liderança inspiradora, liderou o ataque com coragem. Eles enfrentaram adversários implacáveis em uma luta desesperada para alcançar o núcleo da estação espacial e desativar o Flagelo Estelar. \n No auge da batalha, quando tudo parecia perdido, nosso herói enfrentou o líder imperial em um duelo final. Com suas habilidades na Força e sua determinação inabalável, ele derrotou o líder imperial, mas não sem sacrifício. Nosso herói deu sua vida para desativar o Flagelo Estelar. \n O herói se tornou uma lenda em Veridion, seu sacrifício sendo lembrado por gerações. Sua morte trouxe a vitória para o planeta, e o Flagelo Estelar foi destruído antes que pudesse ser ativado. Veridion estava livre da ameaça do Império, e sua paz foi restaurada. \n A história de nosso herói viveria como um símbolo de coragem e sacrifício, e sua memória continuaria inspirando outros a lutar por um futuro melhor. Veridion havia vencido, e a galáxia estava um pouco mais próxima de se libertar da opressão do Império Galáctico.`;

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
                linkRedirecionamentoGaleria.href = 'index_galeria.html'; // Substitua pelo link da galeria
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
