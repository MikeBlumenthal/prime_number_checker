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
  const Range = function (start, end){
    const rangeArray = [];
    for ( let i = start; i < end; i++ ){
      rangeArray.push(i);
    }
    return rangeArray;
  };

  const check = function( number ) {
    let range = Range( 2, number )
    let result = null;
    for ( let x of range ) {
      if ( numberBeingChecked % x == 0 ) {
        result =  true;
      }
    }
    return result;
  };


  let result = null;
  if ( numberBeingChecked === 2 ) {
    result = true;
  } else if (numberBeingChecked == 1) {
    result = false;
  } else if ( check(numberBeingChecked)) {
    result = false;
  } else {
    result = true;
  }

  return result;

};

module.exports = PrimeChecker;
