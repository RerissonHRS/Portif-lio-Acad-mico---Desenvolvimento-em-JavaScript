function validarEmail() {
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    mensagem.textContent = "⚠️ O campo de e-mail não pode estar vazio.";
    mensagem.className = "error";
  } else if (!regex.test(email)) {
    mensagem.textContent =
      "❌ E-mail inválido! Use o formato: exemplo@dominio.com";
    mensagem.className = "error";
  } else {
    mensagem.textContent = "✅ E-mail válido! Obrigado por preencher corretamente.";
    mensagem.className = "success";
  }
}
