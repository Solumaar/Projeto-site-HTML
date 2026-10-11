  function criarConta(event) {

            event.preventDefault();
            var email = document.getElementById("email").value;

            /* Verifica se o e-mail foi informado de forma válida, e sim, tambem copiei do careca do youtube*/
            if (email == "") {
                alert("Informe seu e-mail antes de continuar.");
                return;
            }
            document.getElementById("mensagem").style.display = "block";

            setTimeout(function() {

                window.location.href = "TelaPrincipal.html";

            }, 3000);

        }