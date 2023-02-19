// Récupère l'URL du site web saisi par l'utilisateur
const url = prompt("Entrez l'URL du site web :");

const corsHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT',
  'Access-Control-Allow-Headers': 'Content-Type',
});

// Options de demande incluant les en-têtes de demande CORS
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'text/html',
  },
  mode: 'cors',
  cache: 'default',
};

// Effectuer la demande de page web en utilisant fetch avec les options de demande
fetch(url, options)
  .then(response => response.text())
  .then(html => {
    // Crée un élément div pour stocker le contenu HTML et l'analyser
    const div = document.createElement('div');
    div.innerHTML = html;

    // Recherche l'élément span qui contient le texte "Mots-clés de classement"
    const spanElement = div.querySelector('span:contains("Mots-clés de classement")');

    if (spanElement) {
      // Recherche l'élément a qui suit l'élément span
      const linkElement = spanElement.nextElementSibling;

      if (linkElement && linkElement.tagName === 'A') {
        // Récupère la valeur de l'attribut href de l'élément a
        const hrefValue = linkElement.getAttribute('href');
        // Extrayez la valeur Y de l'attribut href en utilisant une expression régulière
        const valueY = hrefValue.match(/\/(.+)\.html/)[1];

        console.log('La valeur de Y est:', valueY);

        // Créer une nouvelle variable lienam qui est égale à l'URL construit
        const lienam = `https://www.amazon.fr/s?k=${valueY}`;
        // Ouvrir un nouvel onglet avec l'URL de lienam
        window.open(lienam, '_blank');
      }
    }
  })
  .catch(error => {
    console.error('Une erreur est survenue:', error);
  });
