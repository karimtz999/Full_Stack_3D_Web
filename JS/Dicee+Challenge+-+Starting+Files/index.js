function randomImage1() {
    var randomnumber1 = Math.floor((Math.random() * 6) + 1);
    console.log(randomnumber1);
    var randomdiceimage1 = "dice" + randomnumber1 + ".png";
    var randomimagesource1 = "images/" + randomdiceimage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomimagesource1);

    return randomnumber1;
}

function randomImage2() {
    var randomnumber2 = Math.floor((Math.random() * 6) + 1);
    console.log(randomnumber2);
    var randomdiceimage2 = "dice" + randomnumber2 + ".png";
    var randomimagesource2 = "images/" + randomdiceimage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomimagesource2);

    return randomnumber2;
}

function determineWinner() {
    var randomnumber1 = randomImage1();
    var randomnumber2 = randomImage2();

    if (randomnumber1 > randomnumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomnumber2 > randomnumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

determineWinner();
