import axios from 'axios';
const axios = require('axios');

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const urlInput = document.querySelector('#url-input');
  const stringInput = document.querySelector('#string-input');
  const url = urlInput.value;
  const string = stringInput.value;
  const result = await inspectWebsite(url, string);
  console.log(result);
});


async function inspectWebsite(url, string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    if (html.indexOf(string) !== -1) {
      return `String '${string}' found in source code`;
    } else {
      return `String '${string}' not found in source code`;
    }
  } catch (error) {
    console.error(error);
  }
}

const url = prompt('Enter a website URL:');
const string = 'sku:';
console.log(inspectWebsite(url, string));
