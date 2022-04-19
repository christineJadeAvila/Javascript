//JAVASCRIPT EVENTS



//onclick events: mouse event
function hiThere() {
    alert('Hi, there!');
    console.log('clicked');
}


//onkeyup event: keyboard event, executes instruction whenever a key is released after pressing
let a = 0;
let b = 0;
let c = 0;

function changeBackground() {
    let x = document.getElementById('bg');

    x.style.backgroundColor = 'rgb('+a+', '+b+', '+c+')';

    a += 1;
    b += a + 1;
    c += b + 1;

    if (a > 255) a = a - b;
    if (b > 255) b = a;
    if (c > 255) c = b;
}

//onmouseover event: hovering the mouse pointer over the element and its children

function hover() {
    let e = document.getElementById('hov');
    e.style.display = "none";
}

//onmouseout event: hovering the mouse cursor leaves the element which handles a mouseout event
function out() {
    let e = document.getElementById('hov');
    e.style.display = 'none';
}

//onchange event: detects the change in value of any element listing to this event.
// onchange = "alert(this.value)" type="number";