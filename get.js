// XHR + async map
function get(url, params) {
  var xhr = new XMLHttpRequest;
  xhr.onerror = function() { console.error(arguments); }
  xhr.onload = function(){ fulfill(JSON.parse(xhr.response)) };
  xhr.open('GET', url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
  
  var wish;
  function Fairy(){
    var queue = [];
    queue.map = function(fn){ wish = fn; return this };
    return queue;
  }
  function fulfill(response) { response.forEach(wish); }
  
  return new Fairy;
}