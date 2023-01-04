// we need to write a function
// that returns a promise object
// takes in a number

// the promise will be fulfilled after 5 seconds
// if a -ve number is given
// the promise will reject with the following string
// "cannot sqRt a negative number"

// if zero or a positive number is provided
// then the promise resolves with the real
// square root

//Promise producing Function : Producer
// Functions,codes that need the data from promise: consumer
let display = document.querySelector("h1");
function sqRt(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 0) {
        resolve(Math.sqrt(num));
      } else {
        reject("Cannot square root a negative number");
      }
    }, 5000);
  });
}
//! A way to execute a function once the promise is resolved that is either fulfilled or rejected. This is the consumer of the promise and will have access to the result. This is solved by [.then] and [.catch] ;
//* promise = new promise(function(resovle,reject){})
//* .then((data)=>{});
//*.catch((data)=>{});

let sol = sqRt(6);
sol
  .then((d) => {
    console.info(d);
    display.innerText = d;
  })
  .catch((er) => {
    console.error(er);
    display.innerText = er;
  });
