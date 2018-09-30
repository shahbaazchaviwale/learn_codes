var a = 10; b= 10;
// pass by value
function add(x,y){
    return x + y;
}
console.log("Pass By Value :=>",add(a,b));


var values = {
    data_1 : 10, data_2 : 10
}

function sub(obj){
    return obj.data_1 + obj.data_2;
}

console.log("Pass By Reference :=>", sub(values));