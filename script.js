
        /* =================================
           LLUVIA DE TE AMO
        ================================= */

        const lluvia =
            document.getElementById("lluvia");

        const frases = [

            "TE AMO ❤️",
            "TE AMOOO 💕",
            "TE AMOOOO 💗",
            "TE AMO MUCHO 🥹",
            "TE AMO ❤️‍🔥",
            "TE AMOOOOOO 💖",
            "TE AMO MI AMOR 💕",
            "TE AMO POR SIEMPRE ❤️",
            "TE AMO DEMASIADO 💘",
            "TE AMO INFINITAMENTE 💞"

        ];


        const cantidadLluvia =
            window.innerWidth < 600 ? 45 : 70;


        for (
            let i = 0;
            i < cantidadLluvia;
            i++
        ) {

            const elemento =
                document.createElement("div");

            elemento.className = "te-amo";

            elemento.textContent =
                frases[
                    Math.floor(
                        Math.random() * frases.length
                    )
                ];


            /* Posición horizontal */

            elemento.style.left =
                Math.random() * 100 + "vw";


            /* Velocidad */

            elemento.style.animationDuration =
                (5 + Math.random() * 8) + "s";


            /* Inicio aleatorio */

            elemento.style.animationDelay =
                -(Math.random() * 12) + "s";


            /* Tamaño */

            const tamaño =
                13 + Math.random() * 17;

            elemento.style.fontSize =
                tamaño + "px";


            lluvia.appendChild(elemento);
        }


        /* =================================
           CORAZONES FLOTANDO
        ================================= */

        const corazones =
            document.getElementById("corazones");


        const cantidadCorazones =
            window.innerWidth < 600 ? 20 : 35;


        for (
            let i = 0;
            i < cantidadCorazones;
            i++
        ) {

            const elemento =
                document.createElement("div");

            elemento.className = "corazon";


            elemento.textContent =
                Math.random() > 0.5
                    ? "♥"
                    : "♡";


            elemento.style.left =
                Math.random() * 100 + "vw";


            elemento.style.animationDuration =
                (6 + Math.random() * 8) + "s";


            elemento.style.animationDelay =
                -(Math.random() * 12) + "s";


            corazones.appendChild(elemento);
        }


        /* =================================
           EXPLOSIÓN DE TE AMO
        ================================= */

        function explosionAmor() {

            const cantidad =
                window.innerWidth < 600 ? 25 : 40;


            for (
                let i = 0;
                i < cantidad;
                i++
            ) {

                const elemento =
                    document.createElement("div");

                elemento.className =
                    "particula";


                elemento.textContent =
                    Math.random() > 0.4
                        ? "TE AMO ❤️"
                        : "💕";


                const angulo =
                    Math.random() *
                    Math.PI * 2;


                const distancia =
                    100 +
                    Math.random() * 350;


                const x =
                    Math.cos(angulo) *
                    distancia;


                const y =
                    Math.sin(angulo) *
                    distancia;


                elemento.style.setProperty(
                    "--x",
                    x + "px"
                );


                elemento.style.setProperty(
                    "--y",
                    y + "px"
                );


                document.body.appendChild(
                    elemento
                );


                setTimeout(() => {

                    elemento.remove();

                }, 1600);

            }

        }
