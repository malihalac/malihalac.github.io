// script.js
function toggleSidebar() {
    const leftPanel = document.querySelector('.left');
    const rightPanel = document.querySelector('.right');
    leftPanel.classList.toggle('active');
    rightPanel.classList.toggle('active');
  }