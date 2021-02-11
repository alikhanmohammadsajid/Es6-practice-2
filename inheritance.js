class parent{
    constructor(){
        this.fathername = 'baba'
    }
}

class Child extends parent{
    constructor(name){
        super()
        this.name = name 
    }
    getfullname(){
        return this.name = 'sajid ali khan'
    }
} 
const firstChild = new Child('sajid');
const secondChild = new Child('wajid');
console.log(firstChild.getfullname())