let click_me_btn = document.getElementById("example_anchor");
// click_me_btn.addEventListener("click", function (e) {
//   e.preventDefault();
//  console.log(e);
// });

//* Ouput element ID and data- name

let m = document.getElementById("example_anchor");
m.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.dataset.id);
});
