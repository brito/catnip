// extract links from TabsOutliner
var csv = 'href\ttitle\n' + [...document.querySelectorAll('a[href]')].
filter(a=>!a.href.match('chrome-extension')).
map(a=>[a.href, a.lastChild.innerText.replace(/"/g, '')].
join('\t')).
join('\n')
