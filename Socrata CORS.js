console.clear()
var token = 'http://dev.socrata.com/authentication',
    url = 'https://controllerdata.lacity.org/resource/payroll.json',
    query = '?$select=department_title, sum(actual_earnings)&$group=department_title',
    xhr = new XMLHttpRequest;
    
xhr.onload = function (){ 
    parse(JSON.parse(xhr.response)); };
    
xhr.open('GET', url + query);
//xhr.setRequestHeader('X-App-Token', token);
xhr.send();

var meta = {};
function parse(response){
    
}
