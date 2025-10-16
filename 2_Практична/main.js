//Identifiers
const user_name = "";
const birth_year = 2008;
function print_name (name){
    console.dir("Hello from ${name}")
};

//Cycles
const range = (start, end) => {
    let temp_array = []
    for (let i = 15; i<=30; i++){
        temp_array[i]=i;
    };
    return temp_array;
};
const rangeOdd = (start, end) => {
    let temp_array = [];
    for (let i = 15; i<=30; i++){
        if (i/2!=0){
            temp_array[i]=i;
        };
    };
    return temp_array;
};

//Functions
function average (a, b){
    return (a+b)/2;
};
function square (x){
    return x*x;
};
function cube (x){
    return x*x*x;
};
storing_array=[];
for (let i = 0; i<=9; i++){
    storing_array[i]=average(cube(i),square(i))
};
console.dir(storing_array);

//Objects
const createUser = (name, city) =>{
    return {name: name, city: city}
}
function fn(){
    const object1={name:""};
    let object2={name:""};
    object1.name = "new name for object1"; // works cause only object1 reference is constant
    object2.name = "new name for object2"; // works like above but get's overwritten later
    const a_new_object = {};
    //object1 = a_new_object; // will crash cause object1 is a constant
    object2 = a_new_object;   // will work cause object2 isn't a constant
    console.dir(object1)
    console.dir(object2)
    console.dir(createUser("Marcus","Rome"))
} fn()

//Collections
let array_of_my_contacts = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Max SUMO_EVO', phone: '+380976483872' },
    { name: 'Sphero Orbotix', phone: '+380702391264' },
    { name: 'Ballistic Wheel', phone: '+380509219515' },
    { name: 'Laval Lion', phone: '+380648003626' },
    { name: 'That Bird that I hate', phone: '+380586468029' },
    { name: 'King Arthur', phone: '+380907535701' },
    { name: 'Nikko VaporizR', phone: '+380231614158' }, //trailing coma...
];
const findPhoneByName = (name) => {
    for (let i = 0; i<array_of_my_contacts.length; i++){
        if (array_of_my_contacts[i].name == name){
            return array_of_my_contacts[i].phone;
        };
    };
};
console.dir("The Ultimate Life Form's phone is: "+findPhoneByName("The Ultimate Life Form"))

let object_of_my_contacts = {
    'Marcus Aurelius':'+380445554433',
    'Max SUMO_EVO':'+380976483872',
    'Sphero Orbotix':'+380702391264',
    'Ballistic Wheel':'+380509219515',
    'Laval Lion':'+380648003626',
    'That Bird that I hate':'+380586468029',
    'King Arthur':'+380907535701',
    'Nikko VaporizR':'+380231614158' //no trailing coma :-(
}
const findPhoneByName_in_Object = (name) => {
    return object_of_my_contacts[name];
}
console.dir("Max SUMO_EVO's phone is: "+findPhoneByName_in_Object("Max SUMO_EVO"))