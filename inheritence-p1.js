class principal {
    constructor(teacher_name) {
        this.name=teacher_name;
    }
};

class teacher extends principal {
    constructor(teacher_name,subject,State) {
        super(teacher_name,subject,State);
        this.subject=subject;
        this.state=state;
    }
};

const teacher=new.yogesh