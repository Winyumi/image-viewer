(() => {

  const d = document;
  const body = d.querySelector('body');

  let fadeDelay = 250; // adjust css transition as well

  // build modal
  let image = d.createElement('img');
  let modal = d.createElement('div');
  image.classList.add('fade');
  modal.classList.add('fade');
  modal.id = 'ImageViewer';
  modal.append(image);

  // get images
  let images = d.querySelectorAll('a.viewer');

  // handle image links
  images.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      viewImage(el.href, el.querySelector('img').alt);
    });
  });

  // handle image onload
  image.addEventListener('load', e => {
    image.classList.remove('fade');
    modal.classList.remove('loading');
  });

  // handle image error
  image.addEventListener('error', e => {
    modal.classList.remove('loading');
    modal.classList.add('error');
  });

  // handle modal close
  window.addEventListener('keydown', e => {
    if (!body.contains(modal)) return;
    if (e.code === 'Escape') closeModal();
  });
  modal.addEventListener('click', e => {
    if (image.contains(e.target)) return;
    closeModal();
  });

  function openModal() {
    modal.classList.remove('error');
    image.classList.add('fade');
    modal.classList.add('fade', 'loading');
    body.append(modal);
    setTimeout(() => {
      modal.classList.remove('fade');
    }, 10);
  }

  function closeModal() {
    modal.classList.add('fade');
    setTimeout(() => {
      modal.remove();
      modal.classList.remove('error');
      image.classList.add('fade');
    }, fadeDelay);
  }

  function viewImage(url, alt) {
    image.src = url;
    image.alt = alt || '';
    openModal();
  }

})();
