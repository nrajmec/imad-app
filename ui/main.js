//Counter code
var button = document.getElementbyId('counter');

button.onclick = function () {
    
    counter = counter +1;
    var span = document.getElementById('count');
    
    span.innerHTML = counter.toString();
}