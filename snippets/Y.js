
function Y(f) {
    return function(z){
        return z(z);
    }(function(x) {
        return function() {
            return f(x(x)).apply(f, arguments);
        };
    });
}

/**/
ES2015:
Y = 
  f => (
    x => x(x)
  )(
    x => f(
      y => x(x)(y)
    )
  )
/**/


Setup:
function Fib(fn){ return n => {
    if (n < 2) return n;
    return fn(n-1) + fn(n-2);
  }; 
}

Tests:
[ !!Y,
  'function' == typeof Y,
  Y.length == 1,
  Y(Fib)(3) == 2]

  .filter(test => !console.assert(test))



/** /
function mem(fn) {
  return function() {
    var args = JSON.stringify(arguments);
    return fn[args] || (fn[args] = Y(fn));
  };
}
/**/