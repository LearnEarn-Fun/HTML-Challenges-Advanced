function myCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("Universe");
  ctx.drawImage(img,10,10);
}
