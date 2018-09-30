function person(fname, lname, add, mob){

    this.first_name = fname;
    this.last_name = lname;
    this.address = add;
    this.mobile = mob;

    this.ChangeName = function(ref_name){
            return this.first_name = ref_name;
    }
}

person.prototype.nationality = "INDIAN";

var obj_person = new person("Shahbaaz", "chaviwale", "BGM", "7864123",'PAKI');
console.log(obj_person);