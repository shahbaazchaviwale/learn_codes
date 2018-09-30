var  newMap =  new Map();
newMap.set('name', 'jhon');  
newMap.set('id', 12345);    
newMap.set('interest', ['JS', 'PHP', 'REACT']);

console.log("SIZE : ", newMap.size);
console.log("KEYS : ", newMap.keys());
console.log("VALUES : ", newMap.values());
console.log(newMap.get("id"));

for(let [key, value] of newMap){
    console.log(`${key} => ${value}`);
}

