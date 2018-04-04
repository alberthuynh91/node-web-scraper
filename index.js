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
    console.log(`Scarped Sampled Tracks from Kendrick Lamar: `, tracks)
  })
  .catch((err) => {
    console.log(err);
  });