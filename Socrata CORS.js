console.clear()
var token = '',
    // url='https://soda.demo.socrata.com/resource/earthquakes.json',
    url = 'https://controllerdata.lacity.org/resource/payroll.json',
    xhr = new XMLHttpRequest;
    
xhr.onload = function (){ 
    parse(JSON.parse(xhr.response)); };
    
xhr.open('GET', url);
//xhr.setRequestHeader('X-App-Token', token);
xhr.send();

var meta = {};
function parse(response){
    
    console.table(response);
}
