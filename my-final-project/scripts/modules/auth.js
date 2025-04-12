export function initAuth() {
  const loginSection = document.getElementById('login-section');
  const dashboard = document.getElementById('dashboard');

  const user = localStorage.getItem('gamerUser');

  if (user) {
    loginSection.classList.add('hidden');
    dashboard.classList.remove('hidden');
  } else {
    renderLoginForm(loginSection);
  }
}

function renderLoginForm(container) {
  container.innerHTML = `
    <form id="login-form">
      <h2>Entrar no Gamers Online</h2>
      <input type="text" id="username" placeholder="Digite seu nome de usuário" required />
      <input type="password" id="password" placeholder="Digite sua senha" required />
      <button type="submit">Entrar</button>
    </form>
  `;

  const form = document.getElementById('login-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
      localStorage.setItem('gamerUser', username);
      location.reload(); // recarrega para iniciar a dashboard
    }
  });
}
