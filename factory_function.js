function calci(){
   return{
       x: 5, y: 10,
       add : function(){
           return this.x + this.y;
       },
       sub : function(){
           return this.x * this.y;
       }
   }

}

var obj = calci();

console.log("Addition => ",obj.add());
console.log("Subtract => ",obj.sub());