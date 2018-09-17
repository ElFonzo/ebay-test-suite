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

   selectProduct() {
    let itemSelect = '//h3[@class="s-item__title" and @role="text"]';
    let longSelect = '//*[@id="srp-river-results-listing2"]/div/div[2]/a/h3'
    let alternativeSelect = '//*[@id="srp-river-results-listing2"]/div/div[2]/a'
    I.waitForElement(alternativeSelect, 25);
    I.click(alternativeSelect);
    // store results of name of item you purchased let searchResult = await I.yield();
   },

   addToCart(/*timeout*/) {
    I.waitForText('Add to cart', /*timeout*/);
    I.click('Add to cart');   
   },

   goToCart(timeout) {
    I.waitForElement('.atc-layer-wrapper');
    I.waitForText('Go to cart', timeout);
    I.click('Go to cart'); 
   },

   verifyCartUpdate() {
       I.waitForElement('.listsummary')
       /*I.see(searchResult);*/ //{"itemId":"223091803466"}
   },

   async cartTotalCheck() {
      await let values = I.grabText('div.item-price span span');
      let cartSum = values.map((total) => {
        console.log('values:', values);
        console.log('cartSum:', cartSum);
        console.log('total:', total)
        return { total };
      })
   }



}