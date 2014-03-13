// XHR + async map
var get = (function(url, params) {
  with (new this)
    // You can replace this with your error handling function instead.
    onerror = function() { console.error(arguments); },
    // This is where the promise is fulfilled, assuming the response is a JSON array.
    onload = function(){ fulfill(JSON.parse(xhr.response)) },
    open('GET', url),
    // Some services change their response based on this header. Yours probably should too.
    setRequestHeader('Accept', 'application/json'),
    send();
  
  // A wish is not a promise
  var wish;
  // Fairy fulfills wishes 
  function Fairy(){
    var queue = [];
    // Looks like an array result, but it remembers your wish instead.
    queue.map = function(fn){ wish = fn; return this };
    return queue;
  }
  // Apply wish to every array item, when returned.
  function fulfill(response) { response.forEach(wish); }
  
  return new Fairy;
  
}).bind(XMLHttpRequest);
