// querySelectorAll + mapreduce
function q(s){ return document.querySelectorAll(s) }
NodeList.prototype.map = [].map;
NodeList.prototype.reduce = [].reduce;