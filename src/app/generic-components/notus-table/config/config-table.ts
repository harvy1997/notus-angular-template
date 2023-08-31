//Create table
class ConfigTable {
    title?: string;
    pageSize?:string;
    color?: "light" | "dark";
    config:{headers:string[],
            properties:{column:string,
                        columnImg:string|null,
                        type:string,
                        bold:boolean,
                        typeState:string|null}[]
        };
    data:any[];

    constructor(title: string,
                color: "light" | "dark",
                pageSize:string="10",
                config:{headers:string[],
                        properties:{column:string,
                                    columnImg:string|null,
                                    type:string,
                                    bold:boolean,
                                    typeState:string|null}[]
                        },
                data: any[]
    ){
        this.title=title;
        this.color=color;
        this.pageSize=pageSize;
        this.config=config;
        this.data=data;
    }
}

const propertieText=(column:string,bold:boolean)=>{
    return {column:column,
            columnImg:null,
            type:"typeText",
            bold:bold,
            typeState:null}
}
const propertieTextAndImage=(column:string,columnImg:string,bold:boolean)=>{
    return {column:column,
            columnImg:columnImg,
            type:"typeTextAndImage",
            bold:bold,
            typeState:null}
}
const propertieState=(column:string,typeState:"point" | "arrow-up" | "arrow-down",bold:boolean)=>{
    return {column:column,
            columnImg:null,
            type:"typeState",
            bold:bold,
            typeState:typeState}
}
const propertieProgress=(column:string,bold:boolean)=>{
    return {column:column,
        columnImg:null,
        type:"typeProgress",
        bold:bold,
        typeState:"bar"}
}
const propertieImageGroup=(column:string)=>{
    return {column:column,
        columnImg:null,
        type:"typeImageGroup",
        bold:false,
        typeState:null}
}

const ColorsRowStateOption = {
    complete: "emerald",
    schedule: "teal",
    pending: "orange",
    delayed: "red",
}

export {
    ConfigTable,
    // ConfigState,
    ColorsRowStateOption,
    propertieText,
    propertieTextAndImage,
    propertieState,
    propertieProgress,
    propertieImageGroup
}