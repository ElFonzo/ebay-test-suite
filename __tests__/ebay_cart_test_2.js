
Feature('Ebay Cart Test');

Scenario('I can view Deals and Filter', async (I, testCase2) => {

    testCase2.checkPage();
    testCase2.visitDeals();
    testCase2.visitAdvanced();
    testCase2.searchTerm('Deals');
    testCase2.searchTermDropDown('Exact words, exact order');
    testCase2.minPriceField('50');
    testCase2.search();

});
