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
        console.log(`what is this? : `, $(elem).text())
        tracks[i] = $(elem).text().replace(/[\n\t\r]/g,"");
    })
    console.log(`tracks: `, tracks)
  })
  .catch((err) => {
    console.log(err);
  });