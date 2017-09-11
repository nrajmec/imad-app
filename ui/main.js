console.log('Loaded!');

var ele = document.getElementById('main-text');

ele.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft =marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
};

img.onclick = function () {
  var interval = setInterval(moveRight, 50);
};