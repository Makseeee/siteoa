const axios = require('axios');
const cheerio = require('cheerio');

async function inspectWebsite(url, string) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const html = $.html();
    if (html.indexOf(string) !== -1) {
      return `String '${string}' found in source code`;
    } else {
      return `String '${string}' not found in source code`;
    }
  } catch (error) {
    console.error(error);
  }
}

const url = submit-button
const string = prompt('sku:');
console.log(inspectWebsite(url, string));
print: "string"