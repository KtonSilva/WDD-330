export function loadDashboard() {
  const dashboard = document.getElementById('dashboard');
  const username = localStorage.getItem('gamerUser');

  dashboard.innerHTML = `
    <h2>Bem-vindo(a), ${username}!</h2>
    <div class="dashboard-grid">
      <section class="card">
        <h3>Amigos Online</h3>
        <ul id="friends-list">
          <li>⚡ Lucas</li>
          <li>⚡ Marina</li>
          <li>⚡ Kaio</li>
        </ul>
      </section>
      <section class="card">
        <h3>Sugestões de Jogos</h3>
        <ul id="game-suggestions">
          <li>🎮 Overcooked 2</li>
          <li>🎮 Rocket League</li>
          <li>🎮 Sea of Thieves</li>
        </ul>
        <p class="small">*Integração com API de sugestões virá em breve.</p>
      </section>
    </div>
  `;
}
