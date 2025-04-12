let eventos = JSON.parse(localStorage.getItem('gamerEventos')) || [];

export function initEvents() {
  const section = document.getElementById('eventos');

  section.innerHTML = `
    <h2>Planejar Novo Evento</h2>
    <form id="evento-form">
      <input type="text" id="titulo" placeholder="Título do evento" required />
      <input type="datetime-local" id="data" required />
      <input type="text" id="jogo" placeholder="Jogo" required />
      <button type="submit">Criar Evento</button>
    </form>
    
    <h3>Eventos Agendados</h3>
    <ul id="eventos-lista" class="event-list"></ul>
  `;

  document.getElementById('evento-form').addEventListener('submit', e => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const data = document.getElementById('data').value;
    const jogo = document.getElementById('jogo').value.trim();

    if (titulo && data && jogo) {
      const novoEvento = { titulo, data, jogo };
      eventos.push(novoEvento);
      localStorage.setItem('gamerEventos', JSON.stringify(eventos));
      renderEventos();
      e.target.reset();
    }
  });

  renderEventos();
}

function renderEventos() {
  const lista = document.getElementById('eventos-lista');
  lista.innerHTML = '';

  if (eventos.length === 0) {
    lista.innerHTML = '<li>Nenhum evento agendado ainda.</li>';
    return;
  }

  eventos.forEach((evento, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${evento.titulo}</strong><br>
      <small>${new Date(evento.data
