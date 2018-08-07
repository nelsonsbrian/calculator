jQuery(document).ready(function() {

  jQuery("p").click(function() {
    var number1 = parseInt(prompt("what is the first number?"));
    var number2 = parseInt(prompt("what is the second number?"));


    var add = function(number1, number2) {
      return number1 + number2;
    };
    var subtract = function(number1, number2) {
       return number1 - number2;
    };
    var multiply = function(number1, number2) {
      return number1 * number2;
    };
    var divide = function(number1, number2) {
    	return number1 / number2;
    };

    var resultsAdd = add(number1, number2);
    var resultsSubtract = subtract(number1, number2);
    var resultsMultiply = multiply(number1, number2);
    var resultsDivide = divide(number1, number2);

    alert(number1 + " and " + number2 + ' together is ' + resultsAdd + " " +
     resultsSubtract + " " + resultsMultiply + " " + resultsDivide);
     alert(add(number1, number2));
  });
});
