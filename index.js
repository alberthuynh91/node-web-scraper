const rp = require('request-promise');
const cheerio = require('cheerio');

const tracks = [];

const options = {
    uri: 'https://www.whosampled.com/Kendrick-Lamar/',
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  rp(options)
  .then(($) => {
    $('.track-connection').find('li').each((i, elem) => {
        tracks[i] = $(elem).text().replace(/[\n\t\r]/g,"");
    })
    console.log(`Scraped Sampled Tracks from Kendrick Lamar: \n`, tracks)
  })
  .catch((err) => {
    console.log(err);
  });