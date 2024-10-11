const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if(btn1.textContent === 'ダーク') {
    btn1.textContent = 'ライト';
  } else {
    btn1.textContent = 'ダーク';
  }


});