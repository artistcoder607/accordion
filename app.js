function plusOne() {
    document.querySelector(".plus1").style.display = "none"
    document.querySelector(".minus1").style.display = "flex"
    document.querySelector(".box2-1").style.display = "flex"
    document.querySelector(".card1-1").classList.add("border")
}

function plusTwo() {
    document.querySelector(".plus2").style.display = "none"
    document.querySelector(".minus2").style.display = "flex"
    document.querySelector(".box2-2").style.display = "flex"
    document.querySelector(".card1-2").classList.add("border")
}

function plusThree() {
    document.querySelector(".plus3").style.display = "none"
    document.querySelector(".minus3").style.display = "flex"
    document.querySelector(".box2-3").style.display = "flex"
    document.querySelector(".card1-3").classList.add("border")
}

function minusOne() {
    document.querySelector(".plus1").style.display = "flex"
    document.querySelector(".minus1").style.display = "none"
    document.querySelector(".box2-1").style.display = "none"
    document.querySelector(".card1-1").classList.toggle("border")
}

function minusTwo() {
    document.querySelector(".plus2").style.display = "flex"
    document.querySelector(".minus2").style.display = "none"
    document.querySelector(".box2-2").style.display = "none"
    document.querySelector(".card1-2").classList.toggle("border")
}

function minusThree() {
    document.querySelector(".plus3").style.display = "flex"
    document.querySelector(".minus3").style.display = "none"
    document.querySelector(".box2-3").style.display = "none"
    document.querySelector(".card1-3").classList.toggle("border")

}
