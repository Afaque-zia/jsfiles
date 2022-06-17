
var list = ["zia", "ali imaam", "husain", "abaan", "gufran", "Rahman", "shehbaz"]
console.log(includes(list, "husain"));
function includes(arr, val) {
    var len = 0;
    var flag = false;
    while(len<arr.length){
        if(arr[len] === val){
            flag = true;
        }
        len++
    }
}
