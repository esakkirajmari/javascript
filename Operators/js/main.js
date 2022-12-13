/*
let a=parseInt(prompt("enter your number"));
if(a>0){
document.write("positive number")
}
else{
    document.write("negative number")
}
*/

let day=parseInt(prompt("enter your number"));
switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    default:
        console.log("friday")
}