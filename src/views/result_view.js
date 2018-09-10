const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe( 'PrimeChecker:result-calculated' , ( event ) => {
    const isPrime = event.detail;
    this.displayResult( isPrime );
  })
};

ResultView.prototype.displayResult = function ( result ) {
  const resultElement = document.querySelector( '#result' );
  if ( result ){resultElement.textContent = `Congratulations! It's a prime number!`;}
  else {resultElement.textContent = `That's not prime! Better luck next time!`;}
};

module.exports = ResultView;
