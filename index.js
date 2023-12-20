var container = document.querySelector(".container");
var overlay = document.querySelector(".overlay");

container.addEventListener('mousemove', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var rotateY = -1/5 * x + 20;
    var rotateX = 4/30 * y - 20;

    overlay.style = `background-position : ${x/5 + y/5}%`;
    container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
});
container.addEventListener('mouseout', function(){
    overlay.style = `filter : opacity(0)`;
    container.style = `transform : perspective(350px) rotateX(0deg) rotateY(0deg)`
});