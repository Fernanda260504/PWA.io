const SW_VERSION = '1.0.0';
const URL_SUSTI = 'http://127.0.0.1:5500/PWA/img/gato2.jpeg'; 
const URL_PLACEHOLDER = 'http://127.0.0.1:5500/PWA/img/gato3.jpeg';

self.addEventListener('fetch', function(event) {
  const url = event.request.url;

  if (url.includes('gato.jpeg')) {
    console.log('fetch event for:', event.request.url);

    event.respondWith(
      fetch(URL_SUSTI)
        .then(response => {
          if (!response.ok) {
            throw new Error('Respuesta no OK');
          }
          return response;
        })
        .catch(error => {
          console.error('Error al cargar gato2.jpeg, usando placeholder:', error);
          return fetch(URL_PLACEHOLDER);
        })
    );

    return;
  }
});
