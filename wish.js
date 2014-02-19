// return xhr + promise.then
function wish(url, params){
  if (params) {
	  var p = [];
	  for (var name in params) 
	    p.push(name+'='+params[name]);
	  url += p.join('&');
  }
  
  var xhr = new XMLHttpRequest;
  xhr.onerror = function(){ console.error(arguments); }
  xhr.onload = function(){ fulfill(JSON.parse(xhr.response)); }
  xhr.open('GET', url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
  
  var wish;
  function fulfill(response){ return wish(response); }

  return { then: function(fn){ wish = fn; } };
}