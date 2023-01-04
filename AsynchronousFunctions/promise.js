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

function prime(n) {
  let promised = new Promise(function (resolve, reject) {
    if (n > 0) {
      resolve((n = n ** (1 / 2)));
    } else {
      reject("No negative");
    }
  });
  return promised;
}

let display = document.querySelector("h1");
let x = prime(6);
x.then((d) => {
  console.log(d);
  display.innerText = d;
}).catch((err) => {
  console.log(err);
  display.innerText = err;
});
