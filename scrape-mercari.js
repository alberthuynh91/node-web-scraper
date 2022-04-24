const axios = require("axios");
const cheerio = require('cheerio');

const url = 'https://www.mercari.com/us/category/7/'

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

    console.log(`what is itemList: `, itemList)
    console.log(`what is itemList.length: `, itemList.length)
  })
  .catch(console.error);