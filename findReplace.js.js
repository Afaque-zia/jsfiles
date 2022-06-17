var findValue = prompt("Find Student");
var replaceWith = prompt("Replace this Student with");
var NameList = ["Ali Imam", "Abaan", "Gufran", "Husain", "rehman", "SHehbaz", "Zia"];

alert(replace(findValue,replaceWith, NameList));

function replace(findValue,replaceWith, NameList) {
    var itrateVal = 0;
    while(itrateVal < NameList.length){
        if(NameList[itrateVal] == findValue){
            NameList[itrateVal] = replaceWith;
            return "Replaced Successfully";
        }else{
            return "Not Found!!!";
        }
        itrateVal++
    }
}



