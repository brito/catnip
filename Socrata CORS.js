console.clear()
var token = 'http://dev.socrata.com/authentication',
    url = 'https://controllerdata.lacity.org/resource/revenue.json',
    query = '?$select=department_name, sum(revenue_collected_1)&$group=department_name',
    xhr = new XMLHttpRequest;
    
xhr.onload = function (){ 
    parse(JSON.parse(xhr.response)); };
    
xhr.open('GET', url + query);
//xhr.setRequestHeader('X-App-Token', token);
xhr.send();

var meta = {};
function parse(response){
    
}
