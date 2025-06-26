  const button = document.getElementById('toogglebtn');
    const body = document.body;

    button.addEventListener('click', () => {
      body.classList.toggle('darkmode');

      if (body.classList.contains('darkmode')) {
        button.textContent = 'acende <3';
      } else {
        button.textContent = 'apaga <3';
      }
    });