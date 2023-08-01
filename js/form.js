document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });
});
