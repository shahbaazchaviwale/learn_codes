console.log('=================CALL()=================');
var call_val = {
    a: 5, b: 5
}
var call_calci   = {
    add : function(){
        return this.a + this.b;
    }
}
var call = call_calci.add.call(call_val);
console.log(call);

console.log("=================APPLY()=================");
var apply_val = {
    x :5, y:5
}
var apply_calci = {
    mul : function(m,n){
        return this.x * this.y * m * n;
    }
}
var apply = apply_calci.mul.apply(apply_val, [2,2]);
console.log(apply);

console.log("=================BIND()=================");

var  bind_calci = {
    p : 5, q :6,
    
    
}

var mul = function () {
    return this.p * this.q;
}
 
var bindFun = mul.bind(bind_calci);;
console.log(bindFun());