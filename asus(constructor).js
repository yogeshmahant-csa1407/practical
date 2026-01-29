function asus(model_name,model_no,os,ram,backlit) {
    this.model_no=model_no;
    this.model_name=model_name;
    this.os=os;
    this.ram=ram;
    this.backlit=backlit;
}


const v8=new asus("vivobook","1504","win11","8","yes");
const v8a=new asus("vivobook","1504","win11","8","no");
const v16=new asus("vivobook","1504","win11","16","yes");
const v16a=new asus("vivobook","1504","win11","16","no");
const ex8= new asus("expertbook","2505","win11","8","yes");
const ex8a= new asus("expertbook","2505","win11","8","no");
const ex16= new asus("expertbook","2505","win11","8","yes");
const ex16a= new asus("expertbook","2505","win11","8","no");

console.log(v16)
