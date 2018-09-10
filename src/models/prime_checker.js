const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

}

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe( 'FormView:number-submitted' , ( event ) => {
    const inputtedNumber = event.detail;
    const result = this.checksPrime( inputtedNumber );
    PubSub.publish( 'PrimeChecker:result-calculated' , result );
  });
};

module.exports = PrimeChecker;
