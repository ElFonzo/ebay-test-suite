const tryFor = require('../helpers/tryFor');

Feature('Ebay Cart Test');

Scenario('I can search, add and evaluate products at cart', async (I, testCase1) => {
    // let TryFor = tryFor(6, 1000);
    //add 1st item to cart
    testCase1.checkPage();
    await testCase1.searchProduct('pencil');
    // await TryFor(()=> { testCase1.selectProduct() });
    await testCase1.selectProduct(3);
    await testCase1.addToCart();
    testCase1.goToCart(7);
    testCase1.verifyCartUpdate();
    await testCase1.cartItemPrices();

    //add 2nd item to cart
    testCase1.searchProduct('keyring');
    // tryFor(()=> testCase1.selectProduct());
    await testCase1.selectProduct(1);
    testCase1.addToCart();
    testCase1.goToCart(7);
    testCase1.verifyCartUpdate();
    await testCase1.cartItemPrices();

    //add 3rd item to cart
    testCase1.searchProduct('tent');
    // tryFor(()=> testCase1.selectProduct());
    await testCase1.selectProduct(1);
    await testCase1.addToCart();
    testCase1.goToCart(7);
    testCase1.verifyCartUpdate();
    await testCase1.cartItemPrices();

});
