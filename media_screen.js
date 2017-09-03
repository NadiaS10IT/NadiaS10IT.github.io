var screen = window.innerWidth;
console.log(screen)

var screen = document.body.clientWidth;
console.log(screen)

var screen = document.documentElement.clientWidth;
console.log(screen)

/*
var screen = window.matchMedia("(max-width:768px)");
if (screen.matches) {
     console.log("<768px"); 
}
else {
        console.log(">768px");
    }
    */

if(matchMedia){
    var screen = window.matchMedia("(max-width:768px)");
    screen.addListener(changes);
    changes(screen);
}
function changes(screen){
    if (screen.matches) {
        console.log("<768px");
    }
    else {
        console.log(">768px");
    }
}