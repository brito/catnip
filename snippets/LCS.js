console.clear();
// longest common subsequence
// without additions nor deletions

var list = `five
one_two_three
two_three_four
three_four_five
one_two
foo_bar
bar_baz`

.split('\n');

recurse(list, lcs, (input, output) => input.length == output.length)


//
function recurse(list, fn, endif){
  let reduced = fn(list)
  if (endif(list, reduced))
    return reduced
  return recurse(reduced, fn, endif)
}


function lcs(list){ return list
// 1. filter whole subsequences
.sort((a,b) => a.length - b.length)
.reduce((filtered,line,i,list) => {
  for (let j = i+1; j < list.length; j++)
    if (list[j].includes(line))
      return filtered
  return filtered.concat(line)
},[])

// 2. filter partial subsequences
.reduce((filtered,line,i,list) => {
  for (let j = i+1; j < list.length; j++){
    if(((left,right) => {
      let sep = '_',
          l = left.split(sep),
          r = right.split(sep)

      for (let n = l.length-1; n > -1; n--)
        if (l.slice(~n).join(sep) == r.slice(0,n+1).join(sep))
          return filtered = filtered.concat(l.slice(0,~n).concat(r).join(sep));
      
    })(line,list[j])){
      return filtered
    }
  }
  return filtered.concat(line)
}, [])
}
