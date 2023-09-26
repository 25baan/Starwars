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

        const texto = `Após a escolha de nosso herói de se tornar um rebelde e defender Veridion, sua jornada o levou a se tornar uma figura central na resistência do planeta. Sua habilidade natural na Força e sua liderança inspiradora tornaram-no uma figura respeitada entre os rebeldes locais.\n No entanto, a ameaça do Flagelo Estelar continuava a pairar sobre Veridion. Rumores sobre a arma de destruição em massa do Império persistiam, mas a localização exata ainda era um mistério. Determinado a descobrir informações cruciais, nosso herói se envolveu em missões de inteligência, coordenando esforços para reunir pistas sobre o paradeiro do Flagelo Estelar. \n Durante uma dessas missões, ele se infiltrou em uma instalação imperial de alta segurança. Lá, ele encontrou documentos altamente confidenciais que revelavam detalhes sobre a estação espacial onde o Flagelo Estelar estava sendo construído. Os planos indicavam que a arma seria ativada em breve, ameaçando a existência de Veridion e de muitos outros mundos. \n Com essa descoberta vital, nosso herói retornou à base da resistência. Agora, ele enfrenta uma escolha crucial: \n A primeira opção seria Liderar a Carga Final Convocando corajosos combatentes da resistência, para formar um exército determinado a destruir o Flagelo Estelar antes que pudesse ser ativado. \n A segunda opção seria partir em uma Missão Furtiva sozinho optando por uma abordagem mais discreta. infiltrando-se nas linhas inimigas e descobrir informações cruciais sobre o Flagelo Estelar. \n Ambos os caminhos eram perigosos e desafiadores, cada um com suas próprias recompensas e riscos. O destino de Veridion estava nas mãos do herói, e as escolhas que ele faria determinariam não apenas o destino de seu planeta natal, mas também seu papel na luta contra o Império.`;

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
                imagem1.src = 'https://cdn.discordapp.com/attachments/823957677976846417/1156042776190910475/image-removebg-preview.png?ex=6513883c&is=651236bc&hm=6e40094beb02c9dba66384fe4c76bb51701ba35a0418a284d563fdb525cb9712&';
                imagem1.classList.add('imagem-canto-esquerdo'); // Adicione uma classe

                const linkParaSite1 = document.createElement('a');
                linkParaSite1.href = 'index caminho BA.html';
                linkParaSite1.appendChild(imagem1);
                mensagem.appendChild(linkParaSite1);

// Adicionar a segunda imagem e link
                const imagem2 = document.createElement('img');
                imagem2.src = 'https://cdn.discordapp.com/attachments/823957677976846417/1156044489807380551/Z.png?ex=651389d4&is=65123854&hm=9ecf619cd68ecb9bf62e28ee9cf685b0dcb39f7d025feda54db7009e3f2ae778&';
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
