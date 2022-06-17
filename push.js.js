
var pushValue = prompt("Push Name in the end of array");
var NameList = ["Ali Imam", "Abaan", "Gufran", "Husain", "rehman", "SHehbaz", "Zia"];

alert(addValue(pushValue, NameList));

function addValue(pushValue, NameList) {
    var itrateVal = 0;
    var flag = false;
    while(itrateVal < NameList.length){
        console.log("Zia");
        if(NameList[itrateVal] == pushValue){
            return "We already have this student";
        }else{
            NameList[NameList.length] = pushValue;
            return "added successfully" + NameList;
        }
        itrateVal++
    }
}

console.log(NameList)
