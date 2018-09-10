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

PrimeChecker.prototype.checksPrime = function ( numberBeingChecked ) {
  const range = function (start, end){
    const rangeArray = [];
    for ( let i = start; i < end; i++ ){
      rangeArray.push(i);
    }
    return rangeArray;
  };

  const check = function (numberBeingChecked) {
    for ( x  of range(2, numberBeingChecked) )
    if ( numberBeingChecked % x == 0 ) {
      return false;
    } else {
      return true;
    }
  };

  let result = null;
  if ( numberBeingChecked === 1 ) {
    result = false;
  } else if (numberBeingChecked === 2) {
    result = true;
  } else if ( check(numberBeingChecked)){
    result = true;
  } else {
    result = false;
  }

  };

  module.exports = PrimeChecker;
