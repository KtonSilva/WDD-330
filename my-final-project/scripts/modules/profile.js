let perfil = JSON.parse(localStorage.getItem('gamerPerfil')) || {
  jogosFavoritos: [],
  horariosDisponiveis: ''
};

export function initProfile() {
  const section = document.getElementById('perfil');

  section.innerHTML = `
    <h2>Seu Perfil</h2>
    <form id="perfil-form">
      <label for="favoritos">Jogos Favoritos (separe por vírgula):</label>
      <input type="text" id="favoritos" value="${perfil.jogosFavoritos.join(', ')}" />

      <label for="horarios">Horários Disponíveis:</label>
      <input type="text" id="horarios" value="${perfil.horariosDisponiveis}" placeholder="Ex: Noites durante a semana, Sábado à tarde" />

      <button type="submit">Salvar Perfil</button>
    </form>

    <div id="perfil-preview" class="card mt-2"></div>
  `;

  const form = document.getElementById('perfil-form');
  form.addEventListener('submit', e => {
    e.preventDefault();

    const favoritos = document.getElementById('favoritos').value.split(',').map(j => j.trim()).filter(j => j);
    const horarios = document.getElementById('horarios').value.trim();

    perfil = {
      jogosFavoritos: favoritos,
      horariosDisponiveis: horarios
    };

    localStorage.setItem('gamerPerfil', JSON.stringify(perfil));
    renderPerfilPreview();
  });

  renderPerfilPreview();
}

function renderPerfilPreview() {
  const container = document.getElementById('perfil-preview');

  if (!perfil.jogosFavoritos.length && !perfil.horariosDisponiveis) {
    container.innerHTML = '<p>Perfil vazio. Preencha o formulário acima para começar.</p>';
    return;
  }

  container.innerHTML = `
    <h3>Resumo do Perfil</h3>
    <p><strong>Jogos Favoritos:</strong> ${perfil.jogosFavoritos.join(', ')}</p>
    <p><strong>Horários Disponíveis:</strong> ${perfil.horariosDisponiveis}</p>
  `;
}
