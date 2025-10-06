// Botão de alternância do tema
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Verifica se o usuário já tem preferência salva
const darkMode = localStorage.getItem('dark-mode');

if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️ Modo Claro';
}

// Evento de clique para alternar
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    toggleButton.textContent = '☀️ Modo Claro';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    toggleButton.textContent = '🌙 Modo Escuro';
  }
});
