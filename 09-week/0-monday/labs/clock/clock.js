var d, h, m, s, hdeg, ampm;
function adjustClock() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  hdeg = h * 30 + m / 2;
  if (h >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  hh.style.transform = "rotate(" + hdeg + "deg)";
  mh.style.transform = "rotate(" + m * 6 + "deg)";
  sh.style.transform = "rotate(" + s * 6 + "deg)";
  meridiem.innerHTML = ampm;
}
window.addEventListener("load", function() {
  this.setInterval(adjustClock, 1000);
});
