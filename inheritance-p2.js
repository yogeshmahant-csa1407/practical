class animal {
    constructor(name) {
        this.name=name;
    }
}

class dog extends animal {
    constructor(name,breed) {
        super(name);
        this.breed=breed
    };
};


const dog1=new dog('bob','golden retriever');
const dog2=new dog('bob','husky');
const dog3=new dog('tomy','labrador')
const dog4=new dog('sheru','german sheperd');
const dog5=new dog('sheru','daberman');
const dog6=new dog('sheru','rottweller');


console.log(dog5);
