function myFunction() {

    let perimeter = 0;
    let length1 = document.getElementById("length").value;
    let width1 = document.getElementById("width").value;
    perimeter = 2 * (length1 + width1);
    stripCount = (perimeter / 42);
}

document.getElementById('strip').innerHTML = stripCount;