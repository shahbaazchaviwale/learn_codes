let arr_data = [2,4,6,8,10];


let totSum = (...arr) =>{
    let sum = 0;
    for(let elements of arr){
        sum +=elements;
    }

    console.log(sum)
}


totSum(2,4,6,8,10,12);
totSum(...arr_data);

