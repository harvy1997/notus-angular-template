//Create dropdown
class ConfigProfile {
    image:string|null;
    name:string|null;
    properties:{title:string,column:string}[]|null;
    data:any|null;
    sede:string|null;
    company:string|null;
    role:string|null;
    aboutMe:string|null;
    creationDate:Date|null;
    pending:number|null;
    notifications:number|null;

    constructor(image:string|null,
        name:string|null,
        properties:{title:string,column:string}[]|null,
        data:any|null,
        sede:string|null,
        company:string|null,
        role:string|null,
        aboutMe:string|null,
        creationDate:Date|null,
        pending:number|null,
        notifications:number|null
        ){
        this.image=image;
        this.sede=sede;
        this.name=name;
        this.company=company;
        this.role=role;
        this.aboutMe=aboutMe;
        this.creationDate=creationDate;
        this.pending=pending;
        this.notifications=notifications;
        this.data=data;
        this.properties=properties;
    }
}

const profileTypeBasic=(image:string|null,
                name:string|null,
                properties:{title:string,column:string}[]|null,
                data:any|null,
                sede:string|null,
                company:string|null,
                role:string|null,
                aboutMe:string|null,
                creationDate:Date|null)=>{
return new ConfigProfile(image,name,properties,data,sede,company,role,aboutMe,creationDate,null,null);
}
const profileTypeWithNotifiAndPend=(image:string|null,
                            name:string|null,
                            properties:{title:string,column:string}[]|null,
                            data:any|null,
                            sede:string|null,
                            company:string|null,
                            role:string|null,
                            aboutMe:string|null,
                            creationDate:Date|null,
                            pending:number|null,
                            notifications:number|null)=>{
    return new ConfigProfile(image,name,properties,data,sede,company,role,aboutMe,creationDate,pending,notifications);
}

export {
    profileTypeBasic,
    profileTypeWithNotifiAndPend,
    ConfigProfile
}