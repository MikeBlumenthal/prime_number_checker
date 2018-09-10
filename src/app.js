const FormView = require('./views/form_view.js');
const PrimeChecker = require('./models/prime_checker.js');

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();
});
