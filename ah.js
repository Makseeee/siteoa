// Importer la variable imageUrl du fichier script.js
import { imageUrl } from './script.js';

// Créer l'URL de recherche inversée d'image sur Google
const urlFinal = 'https://www.google.com/searchbyimage?q=site%3Awww.aliexpress.com&image_url=' + imageUrl + '&client=google' + '&num=30';
// Utiliser la constante urlFinal dans le reste du code...
console.log(urlFinal);
