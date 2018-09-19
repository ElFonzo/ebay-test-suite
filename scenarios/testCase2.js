const expect = require('chai').expect;

const I = actor();

module.exports = {

    visitPage() {
        I.amOnPage(`/`);
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

    filterCategory(dropDownName) {
        let option = '#e1-1';
        I.selectOption(option, dropDownName);
    },

    searchTermDropDown(listNumber) {
        I.selectOption('//select[@aria-label="Keyword options"]/option', `${listNumber}`);
    },

    minPriceField(cost) {
        I.fillField('.price', cost);
    },

    search() {
        I.click('Search');
    },

    async readItemList() {
        let productList = `#ListViewInner`;
        //let itemList = await I.grabTextFrom(`${productList} li h3 a[title]`);
        let itemListPrice = await I.grabTextFrom(`${productList} > li > ul:nth-child(5) > li:nth-child(1) > span`); // ul li:nth-child(first) span
        console.log(itemListPrice);
    },

    filterListings() {
        let buyNow = "Buy It Now";
        I.click(buyNow);
        // I.click(`//span[@title=${buyNow}]`);
    },

    async selectItemList() {
        let productList = `#ListViewInner`;
        let option2 = `${productList}//li/div/div/a`;
        let option3 = `${productList} > li:last-of-type > div`; // > div > a
        I.scrollTo(option3);
        I.click(option3);
    },

    addToCart() {
        let addToCartText = '//form[@name="viactiondetails"]//span/a[text()="Add to cart"]'
        let addToCartId = '#atcRedesignId_btn';
        let addToCartXpath = '//*[@id="atcRedesignId_btn"]';
        I.waitForElement(addToCartId);
        I.click('Add to cart');
        // I.waitForElement(addToCartXpath, 5);
        // I.click(addToCartXpath);
    },

    goToCart() {
        let wrapper = '.atc-layer-wrapper'
        let goToCart = `//div[@class="atc-layer-wrapper]//a//span[text()="Go to cart"]`
        I.waitForElement(wrapper);
        I.click('Go to cart');
    },

    async validatePrice() {
        let value = await I.grabTextFrom('div.cartsummary table tr:last-of-type td[data-test-id="TOTAL"] span span'); //
        
        //    let convert = Number(value.replace(/[^0-9.-]+/g,""));
        let convert = value.replace(/[^0-9.-]+/g, "");
        let conversion = parseFloat(convert);
        // console.log(conversion);
        // let sum = conversion.reduce(function (accumulator, currentValue) {
        //     return accumulator + currentValue;
        // }, 0);
        console.log(conversion);

        expect(conversion).to.be.above(50);

    }

}