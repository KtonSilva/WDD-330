import { initAuth } from './modules/auth.js';
import { loadDashboard } from './modules/dashboard.js';
import { initEvents } from './modules/events.js';
import { initProfile } from './modules/profile.js';

// Função para alternar entre seções com base no clique no menu
function showSection(id) {
  document.querySelectorAll('main section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

// Lidar com navegação por cliques nos links
function setupNavigation() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href').replace('#', '');
      showSection(target);
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  initAuth();
  loadDashboard();
  initEvents();
  initProfile();
});
