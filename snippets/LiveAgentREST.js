function log(x){ console.log(x) || x }

function get(url, headers){
  console.log(url)
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest;
    xhr.onload = () => then(xhr.response);
    xhr.onerror = () => console.error(xhr.response)
    xhr.open('GET', url);
    headers.forEach(([header, value]) => xhr.setRequestHeader(header, value));
    xhr.send();
  });
}

// CORS
var hostname = 'https://d.la4-c1-dfw.salesforceliveagent.com';

// 1. SessionId
// https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SessionId.htm

get(`${hostname}/chat/rest/System/SessionId`, [
  ['X-LIVEAGENT-AFFINITY',''],
  ['X-LIVEAGENT-API-VERSION','']
]).then(log)

