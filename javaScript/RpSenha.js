/* 
           1 - Verifica quando  o e-mail é colocando, quando clicar no botao "Enviar", mostra uma alerta "Senha enviada". E infelizzmente tive que copiar do youtube*/
        function enviarSenha(event) {
            event.preventDefault();
            var email = document.getElementById("email").value;
            if (email == "") {

                alert("Informe seu e-mail para recuperar a senha.");

                return;
            }
            document.getElementById("mensagem").style.display = "block";
        }


        /* Verificaçao do e-mail, caso o email nao seja digitado e o usuário tentar ir para outra página, vai dar error.*/  

        function verificarEmail(event) {

            var email = document.getElementById("email").value;
            if (email == "") {
                event.preventDefault();

                alert("Informe seu e-mail antes de continuar.");
            }

        }