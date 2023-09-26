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

        const texto = `Deixando para trás os ensinamentos Jedi, o aprendiz aceitou a oferta de Darth Malum e abraçou o lado sombrio da Força. Com o treinamento sombrio de Darth Malum, ele adquiriu habilidades devastadoras, tornando-se uma ameaça formidável. \n Juntos, o aprendiz e Darth Malum lançaram um ataque implacável contra o Império. Usando seu poder combinado, eles conseguiram derrotar as forças imperiais e tomar o controle de Veridion. \n No entanto, à medida que o aprendiz mergulhava mais profundamente no lado sombrio da Força, sua sede de poder crescia sem controle. Ele se tornou um ditador cruel e implacável, governando Veridion com tirania ainda maior do que a do próprio Império. \n Sob seu regime, Veridion sofreu uma opressão brutal. O aprendiz estava obcecado com a acumulação de poder e riqueza, explorando os recursos do planeta e subjulgando seu povo. A esperança que uma vez brilhou em seu coração havia sido substituída por ganância e crueldade desenfreadas. \n A história termina com Veridion livre do Império, mas sob o domínio de um ditador ainda mais cruel e implacável. A galáxia testemunhou a queda do aprendiz, que agora se afundara completamente no lado sombrio da Força, tornando-se uma ameaça ainda maior para a paz e a liberdade.`;

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
                linkRedirecionamento.href = 'https://seu_link_aqui'; // Substitua pelo seu link
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
                linkRedirecionamentoGaleria.href = 'https://seu_link_da_galeria_aqui'; // Substitua pelo link da galeria
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
