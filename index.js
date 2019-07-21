const axios = require("axios");
const cheerio = require('cheerio');

const tracks = [];

const url = 'https://www.whosampled.com/Kendrick-Lamar/'

axios(url)
  .then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    $('.track-connection').find('li').each((i, elem) => {
      tracks[i] = $(elem).text().replace(/[\n\t\r]/g,"");
    })
    console.log(`Scraped Sampled Tracks from Kendrick Lamar: \n`, tracks)
  })
  .catch(console.error);