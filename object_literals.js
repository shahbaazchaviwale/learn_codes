var calci = {
    x : 20, y : 30,
    add : function(){
        return this.x + this.y;
    },
    sub : function(){
        return this.x * this.y;
    }
}

console.log(calci.add());
console.log(calci.sub());