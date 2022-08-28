let students= [
    {
        name: "Siddharth Abhimanyu",
        age: 21
    },
    {
        name: "Malar",
        age: 25
    },
    {
        name: "Maari",
        age: 18
    },
    {
        name: "Bhallala Deva",
        age: 17
    },
    {
        name: "Baahubali",
        age: 16
    },
    {
        name: "AAK chandran",
        age: 23
    },
    {
        name: "Gabbar Singh",
        age: 33
    },
    {
        name: "Mogambo",
        age: 53
    },
    {
        name: "Munnnabhai",
        age: 40
    },
    {
        name: "Sher Khan",
        age: 20
    },
    {
        name: "Chulbul Pandey",
        age: 19
    },
    {
        name: "Anthony",
        age: 28
    },
    {
        name: "Devadas",
        age: 56
    }
];
function less20(){
for(i=0;i <students.length;i++){
    let age = students[i].age;
    console.log(age)
    if (age >= 20) 
    console.log(age)
}
}
(less20())

let newArray = {
    name1: "RajiniKanth",
    age: 15,
    hasPets: true
}
const returnKeys=()=>{
let keys = Object.keys(newArray)
console.log(keys)
}
returnKeys()