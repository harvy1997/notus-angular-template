//Create table
class ConfigTable {
    title?: string;
    pageSize?:string;
    color?: "light" | "dark";
    config:{headers:string[],properties: string[]};
    data:any[];

    constructor(title: string,
                color: "light" | "dark",
                pageSize:string="10",
                config:{headers:string[],properties: string[]},
                data: any[]
    ){
        this.title=title;
        this.color=color;
        this.pageSize=pageSize;
        this.config=config;
        this.data=data;
    }
}

class ConfigColumnTable {
    bold: boolean;
    image: string | null;
    state:{typeState: "bar" | "point" | "arrow-up" | "arrow-down",
            color: string,
            percent: number | null
        }|null
    imageArray: string[] | null;
    constructor(bold: boolean = false,
        image: string | null,
        state: {typeState: "bar" | "point" | "arrow-up" | "arrow-down",
                color: string,
                percent: number | null
            }|null,
        imageArray: string[] | null) {
        this.bold = bold;
        this.image = image;
        this.state = state;
        this.imageArray = imageArray;
    }
}
const typeText=(bold:boolean)=>{
    return new ConfigColumnTable(bold,null,null,null);
}
const typeTextAndImage=(bold:boolean,img:string)=>{
    return new ConfigColumnTable(bold,img,null,null);
}
const typeState=(bold:boolean,typeState:"point" | "arrow-up" | "arrow-down",color:string)=>{
    return new ConfigColumnTable(bold,null,{typeState:typeState,color:color,percent:null},null)
}
const typeProgress=(bold:boolean,color:string,percent: number)=>{
    return new ConfigColumnTable(bold,null,{typeState:"bar",color:color,percent:percent},null)
}
const typeImageGroup=(imageArray: string[])=>{
    return new ConfigColumnTable(false,null,null,imageArray);
}

const ColorsRowStateOption = {
    complete: "emerald",
    delayed: "red",
    schedule: "teal",
    pending: "orange",
}

export {
    ConfigTable,
    ConfigColumnTable,
    // ConfigState,
    ColorsRowStateOption,
    typeText,
    typeTextAndImage,
    typeState,
    typeProgress,
    typeImageGroup
}