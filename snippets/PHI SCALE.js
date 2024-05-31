P = .5+Math.sqrt(5)/2
phroot = x => [x,Math.pow(P,x/2)]
console.log([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0].map(phroot))

diffs = x => Math.pow(P,x/2) - Math.pow(P,-x/2)
//console.log([0,1,2,3,4,5,6,7,8,9].map(x=>diffs(x)))