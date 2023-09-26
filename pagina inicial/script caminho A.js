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

        const texto = `Com sua profunda conexão com a Força e sua determinação em proteger Veridion, o aprendiz decidiu buscar o caminho Jedi. Guiado por sua sabedoria natural e habilidades excepcionais, ele empreendeu uma jornada pela galáxia em busca de um mestre Jedi. \nDurante suas viagens, o aprendiz teve a sorte de encontrar um mestre famoso e respeitado da Ordem Jedi: Mestre Qui-Gon Jinn. Mestre Qui-Gon reconheceu o potencial do jovem aprendiz e concordou em treiná-lo nas artes Jedi. \nO treinamento sob a orientação de Mestre Qui-Gon foi rigoroso, e o aprendiz mergulhou profundamente nos ensinamentos Jedi de equilíbrio, compaixão e sabedoria. Ele também compartilhou sua experiência em proteger Veridion, o que impressionou Mestre Qui-Gon. \nNo entanto, enquanto o aprendiz avançava em seu treinamento, ele esbarrou com um misterioso e sombrio estranho em um planeta desolado. Era Darth Malum, cujo conhecimento das artes sombrias da Força era inegável. Um encontro casual transformou-se em um debate intenso, com Darth Malum tentando minar a determinação do aprendiz em permanecer no caminho Jedi. \nDarth Malum fez uma oferta tentadora: ele prometeu compartilhar segredos e habilidades que permitiriam ao jovem expulsar o Império do seu amado planeta, Veridion, e restaurar a paz. A ideia de libertar Veridion do jugo do Império era um objetivo que o aprendiz sempre acalentara em seu coração. \nNo entanto, Mestre Qui-Gon Jinn, que tinha acompanhado o aprendiz até aquele momento, advertiu sobre as consequências sombrias de aceitar tal oferta. Ele lembrou ao aprendiz que o caminho Jedi era construído sobre valores de justiça, equilíbrio e compaixão, e que a tentação do lado sombrio da Força poderia levá-lo a um caminho perigoso. \nO aprendiz agora se encontrava diante de uma escolha crítica: aceitar o poder oferecido por Darth Malum para liberar Veridion do Império ou permanecer fiel aos ensinamentos Jedi e encontrar uma maneira de alcançar seu objetivo enquanto mantinha a integridade de sua conexão com a Força. Sua decisão definiria o curso de sua jornada e o destino de Veridion.`;

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
            } else {
                // Após a animação do texto, exibir a imagem e o link para o site
                const imagem1 = document.createElement('img');
                imagem1.src = 'https://cdn.discordapp.com/attachments/823957677976846417/1155997292847956078/Sabre_verde.png';
                imagem1.classList.add('imagem-canto-esquerdo'); // Adicione uma classe

                const linkParaSite1 = document.createElement('a');
                linkParaSite1.href = 'index%20caminho%20A.html';
                linkParaSite1.appendChild(imagem1);
                mensagem.appendChild(linkParaSite1);

// Adicionar a segunda imagem e link
                const imagem2 = document.createElement('img');
                imagem2.src = 'https://cdn.discordapp.com/attachments/823957677976846417/1155998225585688576/vermeho.png';
                imagem2.classList.add('imagem-canto-direito'); // Adicione uma classe

                const linkParaSite2 = document.createElement('a');
                linkParaSite2.href = 'https://fast.com/pt';
                linkParaSite2.appendChild(imagem2);
                mensagem.appendChild(linkParaSite2);
            }
        }
    
            digitarTexto();
    }    

    audioElement.addEventListener("canplaythrough", function () {
        audioElement.play();
    });

    setTimeout(function () {
        // Não inicia a mensagem automaticamente, apenas exibe o botão "Iniciar Mensagem"
    }, 1000);
});
