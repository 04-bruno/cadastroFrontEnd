    function validar() {
      const nome = document.getElementById("nome").value;
      const idade = document.getElementById("idade").value;
      const cpf = document.getElementById("cpf").value;
      const email = document.getElementById("email").value;
      const meuForm = document.getElementById("form");

      if (nome === "" || email === "") {
        alert("Preencha todos os campos");
        return;
      }

      if (idade < 18) {
        alert("Não pode menor que 18.");
        return;
      }

      alert("Cadastro enviado com sucesso!");
      meuForm.reset();
    }