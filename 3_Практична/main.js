//Random
function Random(max, min=0){
    return (Math.random()*(max+min)-min);
    // Math.random gives a random between 0 and 1
    //  if we multiply it by our ceiling value (max+min)
    //  and then subtract the floor value (min),
    //  we will get result between max and min


    // ...why not multiply by just max?
    // let's say we got 1.0 from Math.random
    // if our max value is 8, and min is -2
    // we would get:
    // (1.0*8)-2 = 6
    //
    // Even though, we got 1.0 from Math.random
    // we would NEVER achieve our desired maximum of 8
    // that's why we must also add min to our max
    // (1.0 * (8+2))-2 = 8
    // which is exactly the behaviour we wanted to achieve
    
    //more examples:
    // (0.5*8)-2 =  2  ; (0.5*(8+2))-2 = 3
    // (0.1*8)-2 = -1.2; (0.1*(8+2))-2 = -1
    //  3 is exactly half on range [-2, 8]... or right after, similar to [0, 10] 
    // -1 is exactly the second element in [-2, 8]
};
for (let i = 0; i<9;i++){
    console.dir(Random(10));
}

console.dir("") // printing nothing to separate tasks

//generateKey
function generateKey(length, characters){
    let i = 0;
    result_string = "";
    while (length-i != 0){
        result_string=result_string+characters.split('')[Math.floor(Random(characters.length))];
        // adding onto previous stuff, 
        // then splitting input,
        // then using Random from previous task to get random char
        i++;
    };
    return result_string;
}
characters = "abcdefghijklmnopqrstuvwxyz0123456789.@!%#&?"
//list of characters which will be used in key generation
for (let i = 0; i<9;i++){
    console.dir(generateKey(16, characters));
}

console.dir("") // printing nothing to separate tasks

//IP whatever task
function transform_ipv4(ipv4="127.0.0.1"){
    temp_array = ipv4.split(".");
    for (let element of temp_array){
        element = Number(element)
    }
    temp_array[0]= temp_array[0]<<8 <<8 <<8;
    temp_array[1]= temp_array[0]<<8 <<8;
    temp_array[2]= temp_array[0]<<8;
    return temp_array.reduce((accamulator, value)=> accamulator+value)
}
console.dir(transform_ipv4());
console.dir(transform_ipv4("192.168.0.101"));
console.dir(transform_ipv4("203.456.0.1"));
console.dir(transform_ipv4("9.5.0.19"));

console.dir("") // printing nothing to separate tasks

//інтроспекція об'єкта
let iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};
let iface_result = []; 
//initializing result array
for (let m_element in iface){
    if (typeof(iface[m_element])==="function"){
        //if to compare type of m_element CONTENTS
        //to "function"

        let a = iface[m_element].length;
        //gettings length of REQUIRED amount of arguments
        //(since we already know m_element is a function)

        iface_result.push([m_element,a]);
        //adding results to the result array
    };
};
console.log(iface_result);