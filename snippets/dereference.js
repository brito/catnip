function dereference(pointer, context){
  var segments = pointer.split('.');
  if (1 == segments.length)
    return context[segments[0]]
  else
    return dereference(segments.slice(1).join('.'), context[segments[0]]);
}

function __TEST__dereference(){
  return dereference('a.b', { a: { b:true }}) == true;
}
