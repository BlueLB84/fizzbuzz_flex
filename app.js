
//  listen for a submit
//  extract number value that was submitted

function fizzBuzz(countTo) {
  let finalArr = [];
  let i = 1;
  while (i <= countTo) {
    switch (true) {
      case i % 15 === 0:
        finalArr.push("fizzbuzz");
        break;
      case i % 3 === 0:
        finalArr.push("fizz");
        break;
      case i % 5 === 0:
        finalArr.push("buzz");
        break;
      default:
        finalArr.push(i);
  }
  i++;
}
  return finalArr;
}

function fizzBuzzTemplate(arr) {
    let resultStr = '';
    let template;

    for (let i = 0; i < arr.length; i++) {
        let uniqueClass = '';
        if (arr[i] === 'fizzbuzz') {
            uniqueClass = 'fizzbuzz';
        }
        if (arr[i] === 'buzz') {
            uniqueClass = 'buzz';
        }
        if (arr[i] === 'fizz') {
            uniqueClass = 'fizz';
        }

        template = (`<div class="fizz-buzz-item ${uniqueClass}">
          <span>${arr[i]}</span>
        </div>`);

        resultStr += template;
    }
    $('.js-results').append(resultStr);
}

function resetResults(){
    $('.js-results').text(' ');
}

$(function(){
    $('input[type=submit]').click(function(event){
        event.preventDefault();
        resetResults();
        let numberChoice = $('#number-choice').val();  // number value that is typed in
        let fizzBuzzArr = fizzBuzz(numberChoice);  // returns an array of fizz buzz
        fizzBuzzTemplate(fizzBuzzArr);
        $('#number-choice').val("");
    });


});
