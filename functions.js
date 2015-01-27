//examples from closure

function wrapValue(n)  {
  var localVariable = n;
  return function() {
    return localVariable;
  };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(5);

console.log(wrap1());
console.log(wrap2());
console.log(wrap2);

function multiplier(factor)  {
  return function(number)  {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));

//example recursion
function power(base,exponent)  {
  if(exponent == 0)  {
    return 1;
  }
  else
    return base * power(base,exponent -1);
}

console.log('2 POWER 3 : ', power(2,3));

//excercise
//function to find the minimum.
function min(x,y)  {
  return (x < y) ? x : y;
}

console.log(min(4,3));
console.log(min(2,7));
console.log(min(3,3));


function isEven(n)  {
  if(n < 0 )
    return false;
  else if( n == 0 )
    return true;
  else if(n == 1)
    return false;
  else 
    return isEven(n - 2);
}


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));