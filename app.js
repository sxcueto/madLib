function createParagraph(){
    var wordOne = document.getElementById('wordOne').value
    var wordTwo = document.getElementById('wordTwo').value
    var wordThree = document.getElementById('wordThree').value
    var wordFour = document.getElementById('wordFour').value
    var wordFive = document.getElementById('wordFive').value
    var wordSix = document.getElementById('wordSix').value
    var wordSeven = document.getElementById('wordSeven').value
    var wordEight = document.getElementById('wordEight').value
    var wordNine = document.getElementById('wordNine').value
    var wordTen = document.getElementById('wordTen').value
    var wordEleven = document.getElementById('wordEleven').value
    var wordTwelve = document.getElementById('wordTwelve').value
    var wordThirteen = document.getElementById('wordThirteen').value
    var wordFourteen = document.getElementById('wordFourteen').value
    var wordFifteen = document.getElementById('wordFifteen').value
    var wordSixteen = document.getElementById('wordSixteen').value
    var wordSeventeen = document.getElementById('wordSeventeen').value
    var wordEighteen = document.getElementById('wordEighteen').value
    var wordNineteen = document.getElementById('wordNineteen').value
    var wordTwenty = document.getElementById('wordTwenty').value


var paragraph = `Let's make `+ wordOne + `! To make  ` + wordTwo + `, you first need to gather your ingredients. You will
need ` + wordThree + ` egg(s), a ` + wordFour + ` of milk, flour, sugar, and ` + wordFive + ` butter. Start by ` + wordSix +
` together the ` + wordSeven + ` ingredients in a bowl. Then, ` + wordEight +` ` + wordNine + ` in the milk, eggs, and ` + wordTen + ` butter.
Once the ` + wordEleven + ` is ` + wordTwelve + `, you're ready to ` + wordThirteen + `! Scoop the batter onto a/an ` + wordFourteen +` ` + wordFifteen +` and cook
until all the bubbles ` + wordSixteen + `. The ` + wordSeventeen + ` part about making ` + wordEighteen + ` is piling them onto your `
 + wordNineteen + `, loading them with your ` + wordTwenty + ` toppings, and digging in!`

document.getElementById('answer').innerHTML = paragraph;


}