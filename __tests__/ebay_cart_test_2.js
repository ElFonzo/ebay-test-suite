
Feature('Ebay Cart Test');

Scenario('I can view Deals and Filter', async (I, testCase2) => {

    testCase2.visitPage();
    // testCase2.visitDeals();
    testCase2.visitAdvanced();
    testCase2.searchTerm('Deals');
    testCase2.filterCategory('Computers/Tablets & Networking')
    testCase2.minPriceField('50');
    testCase2.search();
    testCase2.filterListings();
    testCase2.selectItemList();
    testCase2.addToCart();
    testCase2.goToCart();
    testCase2.validatePrice();

});
