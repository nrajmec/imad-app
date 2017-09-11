console.log('Loaded!');

var ele = document.getElementById('main-text');

ele.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('madi');

img.onclick = function () {
  img.style.marginLeft = '100px'; 
};