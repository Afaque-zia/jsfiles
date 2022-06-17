function checklength(){
    var length = prompt("Tell me Length");
    var breath = prompt("Tell me breath");
    var height = prompt("Tell me height");
    var finallength = 2*(Number(length) + Number(breath) + Number(height));
    alert(finallength);
}
checklength();