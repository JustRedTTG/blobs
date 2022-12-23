var wrapper;

itt = 10
s = 10
function add_blob(x) {
  blob = document.createElement("div"); blob.className = "blob";
  blob.style.left = x;
  wrapper.appendChild(blob);
  setTimeout(() => wrapper.removeChild(wrapper.firstElementChild), 2000);
}
function make_blob(x, time) {
  const m = x + 'px';
  setTimeout(() => {
    add_blob(m);
  }, time);
}
function animate_blob(x) {
  for (i = 0; i < itt * .5; i++){
    make_blob(x, i * 100);
    x -= s
  }
  x += s * itt * .5
  for (i = 0; i < itt * .5; i++){
    make_blob(x, i * 100);
    x += s
  }
}

window.onmousemove = e => animate_blob(e.clientX);
window.addEventListener('load', (event) => {
  wrapper = document.getElementById("blob-wrapper");
  wrapper.removeChild(wrapper.firstElementChild);
})
