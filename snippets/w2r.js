// word to regex tree

word2char:
function wtc(w){return Array.from(w)}

char2regex:
function c2r(){}

identity:
function I(...a){return a}

concat:
function C(o,...a){return [o].concat(...a)}

function RP(s){return JSON.stringify(s.match(/\b\w*(\w)(\w)(?:\2|\3){2,}\w*\b/))}
