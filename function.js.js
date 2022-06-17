function checkName(){
    var name = prompt("what is your name");
    var firstCapLetter = name.slice(0, 2);
    var tenLetters = name.slice(1, 10);
    name = firstCapLetter.toUpperCase() + tenLetters;
    alert(name);
}
checkName();