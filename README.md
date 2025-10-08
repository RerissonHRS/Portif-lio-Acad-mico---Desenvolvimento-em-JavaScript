📨 Validação de E-mail — Projeto em HTML, CSS e JavaScript
📘 Descrição

Este projeto tem como objetivo demonstrar, de forma prática, a validação de um campo de e-mail em um formulário HTML utilizando JavaScript puro.
O sistema verifica se o usuário inseriu um e-mail no formato correto e exibe mensagens de erro ou sucesso com um design moderno e responsivo.

🧩 Funcionalidades

✅ Verifica se o campo de e-mail está vazio
✅ Valida o formato correto (exemplo@dominio.com
)
✅ Exibe mensagens dinâmicas de erro ou sucesso
✅ Layout moderno, centralizado e responsivo
✅ Rodapé personalizado com autoria

🖼️ Prévia do Projeto

Exemplo visual do formulário:

+------------------------------------------+
|        Validação de E-mail               |
|  [ Digite seu e-mail ]                   |
|  [ Validar E-mail ]                      |
|  E-mail válido! Obrigado por preencher.  |
+------------------------------------------+

🧠 Tecnologias Utilizadas

HTML5 → estrutura da página

CSS3 → estilização e layout

JavaScript → validação e interatividade

📂 Estrutura do Projeto
Projeto_Validacao_Email/
│
├── index.html     # Página principal
├── script.js      # Lógica de validação em JavaScript
└── style.css      # Estilos visuais do projeto

🚀 Como Executar

Faça o download do projeto ou clone o repositório:

git clone https://github.com/seuusuario/validacao-email.git


Abra o arquivo index.html em qualquer navegador moderno.

Digite um e-mail no campo e clique em Validar E-mail.

💡 Estrutura de Validação

A verificação utiliza expressões regulares (Regex) para conferir se o e-mail segue o formato padrão:

const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

🧑‍💻 Autor

Desenvolvido por Rerisson H. R. da Silva
📅 Projeto acadêmico — Aula prática de desenvolvimento web
🔗 Feito com HTML, CSS e JavaScript no Playcode.io
