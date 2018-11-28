function findsqrt() {

    let theNumber = Number(prompt("Pick a number"));
    if (!Number.isNaN(theNumber)) {
        var sqrt = theNumber * theNumber;
        document.getElementById("demo").innerHTML = "Your number " + theNumber + " is the square root of " + sqrt;
    } else {
        console.log("Hey. Why didn't you give me a number?");
    }
}    