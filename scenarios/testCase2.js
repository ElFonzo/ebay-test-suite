const I = actor();

module.exports = {

   checkPage() {
    I.amOnPage('/');
    // I.see('ebay', '//td/a[@href="https://www.ebay.com"]');
   },

   visitDeals() {
       I.click('Daily Deals');
   },

   visitAdvanced() {
       I.click('Advanced');
   },

   searchTerm(term) {
    I.fillField('//div/input[@placeholder="Enter keywords or item number"]', term)
   },

   searchTermDropDown(listNumber) {
    I.selectOption('//select[@aria-label="Keyword options"]/option', `${listNumber}`);
   },

   minPriceField(cost) {
       I.fillField('.price', cost);
   },

   search() {
       I.click('Search');
   }


}