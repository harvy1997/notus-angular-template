//Create dropdown
class ConfigDropdown {
    focusText?: string|null;
    color?: string|null;
    options:{optionText:string,
            icon:string|null,
            type:string,
            metod:any|null,
            url:string|null,
            value:any|null}[];
    constructor(focusText:string|null,
                color:string|null,
                options: {optionText:string,
                            icon:string|null,
                            type:string,
                            metod:any|null,
                            url:string|null,
                            value:any|null}[]
    ){
        this.focusText=focusText;
        this.color=color;
        this.options=options;
    }
}
const typeTitle=(optionText:string)=>{
    return {optionText:optionText,
            icon:null,
            type:"title",
            metod:null,
            url:null,
            value:null}
}
const typeMetod=(optionText:string,
                metod:any,icon:string|null)=>{
    return {optionText:optionText,
            icon:icon,
            type:"normal",
            metod:metod,
            url:null,
            value:null}
}
const typeUrl=(optionText:string,
               url:string,icon:string|null)=>{
    return {optionText:optionText,
            icon:icon,
            type:"normal",
            metod:null,
            url:url,
            value:null}
}
const typeCheckBox=(optionText:string,metod:any)=>{
    return {optionText:optionText,
            icon:null,
            type:"checkbox",
            metod:metod,
            url:null,
            value:true}
}

export{
    ConfigDropdown,
    typeTitle,
    typeMetod,
    typeUrl,
    typeCheckBox
}