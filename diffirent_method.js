var person =  { 
    name : "Rami" , 
    mob : 78964320,
    full_details : function(){
        return this.name +" "+this.mob;        
    }
};

var data = { 
    name: "Shaz" ,
    mob: 7412036
}

console.log(person.full_details.call(data));
