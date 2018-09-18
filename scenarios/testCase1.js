// const tryFor = require('../helpers/tryFor');
const I = actor();

module.exports = {

   checkPage() {
    I.amOnPage('/');
    // I.see('ebay', '//td/a[@href="https://www.ebay.com"]');
   },

   searchProduct(searchTerm) {
    I.fillField('//input[@placeholder="Search for anything"]', `${searchTerm}`);
    I.click('Search');
   }, 

   selectProduct: function(position) {
    let option1 = '//div[@id="mainContent"]'
    let option2 = `${option1}//li[@id="srp-river-results-listing${position}"]/div/div[1]`
    let option3 = 'div'
    I.waitForElement(option1);
    I.click(option2);
   },

   addToCart() {
    let addToCartText = '//form[@name="viactiondetails"]//span/a[text()="Add to cart"]'
    let addToCartId = '#atcRedesignId_btn';
    let addToCartXpath = '//*[@id="atcRedesignId_btn"]';
    // I.waitForText('Add to cart', 7);
    I.waitForElement(addToCartXpath, 5);
    I.click(addToCartXpath);
    // I.click('Add to cart');   
   },

   

   goToCart(timeout) {
    let wrapper = '.atc-layer-wrapper'
    let goToCart = `//div[@class="atc-layer-wrapper]//a//span[text()="Go to cart"]`
    I.waitForElement(wrapper);
    // I.waitForText('Go to cart', timeout);
    I.click(goToCart); 
   },

   verifyCartUpdate() {
       I.waitForElement('.listsummary')
       /*I.see(searchResult);*/ //{"itemId":"223091803466"}
   },

   async cartItemPrices() {
       let values = await I.grabTextFrom('div.item-price span span');
       console.log(JSON.stringify(values));
       let convert = Number(values.replace(/[^0-9.-]+/g,""))
       let sum = convert.reduce(function(accumulator, currentValue) {
          return accumulator + currentValue;  
       }, 0);
       console.log(sum);
   },

  //  async cartTotalCheck() {
  //     await let values = I.grabText('div.item-price span span');
  //     let cartSum = values.map((total) => {
  //       console.log('values:', values);
  //       console.log('cartSum:', cartSum);
  //       console.log('total:', total)
  //       return { total };
  //     })
  //  }



}