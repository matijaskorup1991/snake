let $ = (el) => document.querySelector(el);
let $$ = (el) => Array.from(document.querySelectorAll(el));
let $on = (el, evt, fn) =>
  Array.isArray(el)
    ? el.forEach((o) => $on(o, evt, fn))
    : el.addEventListener(evt, fn);

for (let i = 1; i <= 100; i++) {
  $('#snakeField').innerHTML += '<div class="item"></div>';
}

function random() {
  let { floor, random } = Math;
  return `rgb(${floor(random() * 255 + 1)},${floor(random() * 255 + 1)},${floor(
    random() * 255 + 1
  )})`;
}

$on($$('div'), 'mouseover', (e) => {
  e.target.style.backgroundColor = random();
  setTimeout(() => {
    e.target.style.backgroundColor = 'lightblue';
  }, 500);
});
