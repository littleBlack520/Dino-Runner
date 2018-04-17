
function draw() {
    var img = new Image();
    img.onload = function () {
        var x = 1678,
            index = 2;
        setInterval(function(){
            if(index > 3){
                index = 2;
            }
            x = 1678 + (88*index)
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            ctx.drawImage(img, x,2,88,95,0,HEIGHT-43,40,43);
            index++;
        },100);
    }
    img.src = '../images/pic.png';
}
