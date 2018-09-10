const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe( 'PrimeChecker:result-calculated' , ( event ) => {
    const isPrime = event.detail;
    this.displayResult( isPrime );
  })
};

ResultView
