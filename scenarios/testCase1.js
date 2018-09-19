const I = actor();

module.exports = {

   checkPage() {
    I.amOnPage('/');
   },

   searchProduct(searchTerm) {
    I.fillField('//input[@placeholder="Search for anything"]', `${searchTerm}`);
    I.click('Search');
   }, 

   selectProduct: function(position) {
    let option1 = '//div[@id="mainContent"]';
    let option2 = `${option1}//li[@id="srp-river-results-listing${position}"]/div/div[1]`;
    I.waitForElement(option1);
    I.click(option2);
   },

   addToCart() {
    let addToCartText = '//form[@name="viactiondetails"]//span/a[text()="Add to cart"]'
    let addToCartId = '#atcRedesignId_btn';
    let addToCartXpath = '//*[@id="atcRedesignId_btn"]';
    I.waitForText('Add to cart', 7);
    I.click('Add to cart');  
    // I.waitForElement(addToCartXpath, 5);
    // I.click(addToCartXpath);
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
   },

   async cartItemPrices() { //works in repl, throws not function in error in tests
       let values = await I.grabTextFrom('div.item-price span span');
       JSON.stringify(values);
       let convert = Number(values.replace(/[^0-9.-]+/g,""))
       let sum = convert.reduce(function(accumulator, currentValue) {
          return accumulator + currentValue;  
       }, 0);
       console.log(sum);
   }

}