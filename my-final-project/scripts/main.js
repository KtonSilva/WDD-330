import { initAuth } from './modules/auth.js';
import { loadDashboard } from './modules/dashboard.js';

window.addEventListener('DOMContentLoaded', () => {
  initAuth();
  loadDashboard();
});
