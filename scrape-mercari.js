const axios = require("axios");
const cheerio = require('cheerio');
const fs = require("fs");

const url = 'https://www.mercari.com/us/category/7/'

const generateDataFile = (data) => {
  fs.writeFile("itemlist.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("wrote new data to file itemlist.json")
  })
}

axios(url)
  .then((response) => {
    const html = response.data
    const $ = cheerio.load(html)

    const itemList = []

    $('[data-testid="ItemContainer"]').each((i, elem) => {
      const item = {
        name: $('[data-testid="ItemName"]', elem).text(),
        brand: $('[data-testid="ItemBrand"]', elem).text(),
        price: $('[data-testid="ItemPrice"]', elem).text().split(" ")[0]
      }
      itemList.push(item)
    })

    generateDataFile(itemList)
  })
  .catch(console.error);