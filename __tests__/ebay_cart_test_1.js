
Feature('Ebay Cart Test');

Scenario('I can search, add and evaluate products at cart', async (I, testCase1) => {

    testCase1.checkPage();
    testCase1.searchProduct('dogeCoin');
    testCase1.selectProduct();
    testCase1.addToCart(10);
    testCase1.goToCart(10);
    testCase1.verifyCartUpdate();

    //add 2nd item to cart
    testCase1.searchProduct('silver coins');
    testCase1.selectProduct();
    testCase1.addToCart(/*10*/);
    testCase1.goToCart(10);
    testCase1.verifyCartUpdate();

    //add 3rd item to cart
    testCase1.searchProduct('tent');
    testCase1.selectProduct();
    testCase1.addToCart(10);
    testCase1.goToCart(10);
    testCase1.verifyCartUpdate();

    await testCase1.cartTotalCheck();

});
