
var arrayName = prompt("There are 3 array, (subjectsList, studentsList, fruitsList), if you wanna know the length of any array please type the name of that array.");
var subjectsList = ["Hindi", "English", "Maths", "Science", "History","CS"];
var studentsList = ["Ali Imam", "Abaan", "Gufran", "Husain", "rehman", "SHehbaz", "Zia"];
var fruitsList = ["Mango", "Gavava", "Banana", "Papaya"];

alert(checkLength(arrayName));

function checkLength(arrayName) {
    if(arrayName == "subjectsList"){
        return subjectsList.length;
    }else if(arrayName == "studentsList"){
        return studentsList.length;
    }else{
        return fruitsList.length;
    }
}