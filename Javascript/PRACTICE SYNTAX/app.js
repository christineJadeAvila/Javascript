let a;

function myFunction() {
    a = 19;
    let myname = "Jade";

    document.write(myname);
    document.write("<br>" + a);

}

myFunction();

if ( a === 19) {
    document.write("<br>"+"WHAT");
} else {
    document.write("<br>" + "no");
}

let numbers = [3, 2, 8];
numbers.sort();
document.write("<br> " + numbers[1]);

function add() {
    let x, y, z;

    x = 45;
    y = 32;

    z = x * y;

    document.write("<br>" + z)

}

add();

let itemInfo = {
    type: "T-shirt",
    itemName: "SweatDrift",
    id: 1123,
    price: 450,
}
