const person = {name: 'sajid', age: 21, id: 1, address: 'gohira', phone: 64264762347}
const phone = person.phone
const {name} = person
console.log(name);



const friends = ['sajid', 'saad','wajid', 'ajmaeen'] 
const [...rest_friend] = friends
console.log(rest_friend);


const complexObject = {
    name: 'sajid',
    info:{
        id: 32,
        phone: 478357837583
    }
}
const {phone} = complexObject.info
console.log(phone
);