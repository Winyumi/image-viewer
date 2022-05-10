(() => {

  const d = document;
  const body = d.querySelector('body');
  let gallery = d.querySelector('#gallery');
  let galleryImages = gallery.querySelectorAll('a');


  let fadeDelay = 250;

  // build modal
  let image = d.createElement('img');
  let modal = d.createElement('div');
  image.classList.add('fade');
  modal.classList.add('fade');
  modal.id = 'gallery-viewer';
  modal.append(image);

  function galleryViewImage(url) {
    image.src = url;
    image.classList.add('fade');
    modal.classList.add('fade', 'loading');

    // image onload handler
    image.addEventListener('load', e => {
      image.classList.remove('fade');
      setTimeout(() => {
        modal.classList.remove('loading');
      }, fadeDelay);
    });

    // close modal handler
    modal.addEventListener('click', e => {
      if (image.contains(e.target)) return;
      modal.classList.add('fade');
      setTimeout(() => {
        modal.remove();
      }, fadeDelay);
    });

    body.append(modal);

    // fade in modal
    setTimeout(() => {
      modal.classList.remove('fade');
    }, 50);

  }

  galleryImages.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      galleryViewImage(el.href);
    });
  });

})();
