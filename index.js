var noofbuttons = document.querySelectorAll(".music").length;
for(var i = 0; i < noofbuttons;i++){
    document.querySelectorAll(".music")[i].addEventListener("click",function(){
        var buttonclicked = this.innerHTML;
        buttonclicked = buttonclicked.slice(0,1) ;
        makesound(buttonclicked);
        buttonAnimation(buttonclicked.toLowerCase());
    });
}
document.addEventListener("keypress", function(event) {
    makesound(event.key.toUpperCase());
    buttonAnimation(event.key.toLowerCase());
})
function makesound(key){
    
    switch(key){
        case "P":
            var a1 = new Audio("sounds/piano.mp3");
            a1.play();
            setTimeout(function() {
                a1.pause();
            }, 5000);
            break;
        case "B":
            var a2 = new Audio("sounds/bugle.mp3");
            a2.play();
            setTimeout(function() {
                a2.pause();
            }, 5000);
            break;
        case "F":
            var a3 = new Audio("sounds/flute.mp3");
            a3.play();
            setTimeout(function() {
                a3.pause();
            }, 5000);
            break;
        case "T":
             var a4 = new Audio("sounds/trumpet.mp3");
             a4.play();
             setTimeout(function() {
                a4.pause();
            }, 5000);
             break;
        case "G":
             var a5 = new Audio("sounds/guitar.mp3");
             a5.play();
             setTimeout(function() {
                a5.pause();
            }, 5000);
             break;
        case "X":
            var a6 = new Audio("sounds/xylophone.mp3");
            a6.play();
            setTimeout(function() {
                a6.pause();
            }, 5000);
            break;
        case "D":
            var a7 = new Audio("sounds/drum.mp3");
            a7.play();
            setTimeout(function() {
                a7.pause();
            }, 5000);
            break;

    }
}
function buttonAnimation(cur_key){
    var activeButton = document.querySelector("." + cur_key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}