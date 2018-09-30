var val = null;

if (null) { console.log("null"); } else { console.log("not null");}
console.log("================TEXT prints===================");
var x = "1"+"1"+1+1;
console.log(x);
console.log("===================================");
var a  = [1,2,3,4,5];
a.splice(2,2,"a","b");
console.log(a);
console.log("===================================");
function testArgs() {
 var ten = 0;
    // Where you can test picking the first element
    for (var i = 0; i <= arguments.length; i++) {       
            if (arguments[i] == 10) {
                ten  = arguments[i];
            }
        }
        if(ten === 10){
                console.log('10th found');
        }else{
            console.log('10th not found');
        }
    }
console.log("===================================");

testArgs(4,60,4,10); // return true
testArgs(23,1); //return false
testArgs(5, 10, 5);  //return true

console.log("===================================");
var a = 10;
(function fun() {    
    console.log(a);
    var a = 20;
})();

console.log("================TEXT prints===================");
console.log("30" + 30 + 30 + "30");
console.log(30 + 30 + 30 + "30");
console.log(30 + 30 + 30 + 30);
console.log(30 + "30" + 30 + "30");