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
let sol = sqRt(6);
