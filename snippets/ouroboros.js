// https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/

function methodThatReturnsAPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Processing ${id}`);
      resolve(id);
    }, rando_calrissian(id));
  });
}

let result = [3e-1,6e-1,1e3,2e3,3e3].reduce( (accumulatorPromise, nextID) => {
  return accumulatorPromise.then(() => {
    return methodThatReturnsAPromise(nextID);
  });
}, Promise.resolve());

result.then(e => {
  console.log("Resolution is complete! Let's party.")
});


// a time confabulator of epic proportions probably
function rando_calrissian(x){
  let ab = Date.now() % 2,
    P = .5+Math.sqrt(5)/2
  return x// + [-x/P,x*P][ab]
}