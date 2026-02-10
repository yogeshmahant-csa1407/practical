class animal {
    constructor(name) {
        this.name=name
    }
    sound(){
        console.log("sounds");
        
    }
}

class dog extends animal {
    sound() {
        console.log("barks");
        
    }
}


const dog=new dog
console.log();
