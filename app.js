var budgetController = (function() {})();

var UIController = (function() {
  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, //either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMStrings();

  var ctrlAddItem = function() {
    // Get input data
    var input = UICtrl.getInput();
    console.log(input);
    // Add the item to the budget controller
    // Add the new item to UI
    // Calculate the Budget
    // Display the budget on the UI
  };

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
