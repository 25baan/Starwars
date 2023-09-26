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

        const texto = `Com a tentação de Darth Malum diante de si, o aprendiz estava em um dilema moral. Ele ponderou profundamente sobre as palavras de seu mestre, Mestre Qui-Gon Jinn, que o havia advertido sobre as consequências sombrias de aceitar o poder oferecido pelo lado sombrio da Força. \n  Finalmente, o aprendiz tomou uma decisão corajosa e recusou a oferta de Darth Malum. Ele escolheu permanecer fiel aos ensinamentos Jedi, acreditando que o caminho da justiça, equilíbrio e compaixão era o verdadeiro caminho a seguir. \n Determinado a libertar Veridion do Império, o aprendiz voltou-se para Mestre Qui-Gon Jinn e seus ensinamentos Jedi. Com o apoio de seu mestre e a sabedoria Jedi a guiá-lo, ele começou a reunir aliados na galáxia, aqueles que compartilhavam seu desejo de ver Veridion livre e independente. \n Juntos, eles planejaram e executaram uma estratégia cuidadosa, liderando uma rebelião contra o Império. As habilidades do aprendiz na Força e a liderança inspiradora de Mestre Qui-Gon provaram ser inestimáveis. Gradualmente, eles ganharam apoio suficiente para derrotar as forças imperiais e liberar Veridion. \n A batalha final foi uma luta intensa e determinada. No entanto, a determinação, coragem e valores Jedi do aprendiz e de seus aliados prevaleceram. Veridion finalmente conquistou sua independência do Império, e o povo do planeta celebrou sua libertação. \n O aprendiz, agora um Jedi respeitado e um herói de Veridion, encontrou a paz e a realização que buscava. Ele se tornou um mestre Jedi, guiando outros em sua jornada e compartilhando os ensinamentos que o ajudaram a encontrar seu próprio caminho. \n Além disso, o aprendiz continuou sua missão de ajudar outros planetas oprimidos pelas garras do Império. Ele liderou esforços para libertar mundos sob o domínio imperial, usando sua sabedoria e habilidades Jedi para inspirar resistência e justiça em toda a galáxia. \n Sua jornada o transformou em uma figura lendária, um farol de esperança em um universo marcado pelo conflito. Sua dedicação à paz, equilíbrio e liberdade moldou o destino de inúmeras vidas e deixou um legado duradouro na galáxia. Com sua sabedoria e orientação, ele iluminou o caminho de muitos, ajudando a manter a chama da esperança acesa em toda a galáxia.`;

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
