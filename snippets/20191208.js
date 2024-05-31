// Autocorrelation
// Time Detection
let auto =
// squared signal; complex angle: iπ/f
f => x => Math.pow(x, -2) * Math.pow(Math.E, x * Math.PI / f)

//
, gen = g => g.map(x=>auto(x)(11))
;P=.5+Math.sqrt(5)/2


;gen([-1/P,0,Math.pow(P,-2),1,P,P*P])
// what does this all mean tho
// 2020-03-27
// #rona2020