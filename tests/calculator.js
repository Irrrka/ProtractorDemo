
let homepage = require('../pages/homepage.js');


describe('demo calcuator', () => {
    // beforeEach(() => {
    //     browser.get('http://juliemr.github.io/protractor-demo/');
    //   });

    it('should add correctly', ()=>{
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber("3");
        homepage.enterSecondNumber("3");
        homepage.clickGo();
        homepage.verifyResult("6");
        browser.sleep(5000);
    });
   
});

