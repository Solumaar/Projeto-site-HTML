 function verificarLogin(event) {

            var usuario = document.getElementById("usuario").value;
            var senha = document.getElementById("senha").value;
            //* Verifica se o usuário não foi informado

            if (usuario == "") {

                event.preventDefault();
                alert("Informe o nome de usuário antes de continuar.");
                return;

            }

            // Verifica se a senha não foi informada

            if (senha == "") {
                event.preventDefault();
                alert("Informe a senha antes de continuar.");

                return;

            }

            // Verifica se a senha possui no mínimo 6 caracteres

            if (senha.length < 6) {
                event.preventDefault();

                alert("A senha deve ter no mínimo 6 caracteres.");

                return;
            }

            // Verifica se a senha possui pelo menos uma letra

            if (!/[a-zA-Z]/.test(senha)) {

                event.preventDefault();

                alert("A senha deve possuir pelo menos uma letra.");
                return;
            }


            // Verifica se a senha possui pelo menos um número válido

            if (!/[0-9]/.test(senha)) {

                event.preventDefault();

                alert("A senha deve possuir pelo menos um número.");

                return;

            }

        }