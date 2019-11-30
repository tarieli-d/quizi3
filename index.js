
function change() {

  var col=document.getElementsByClassName('jscolor')[0].value;
  
  //change rectangular bgcolor
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.fillStyle ='#'+col;
  ctx.fill();

  //change cycle color
  ctx.beginPath();
  ctx.arc(295,68,60,0,2*Math.PI);
  ctx.stroke();
  ctx.fillStyle='#'+col;
  ctx.fill();
  }

//in body this method does't work,so i put it here
 window.onload = change;


