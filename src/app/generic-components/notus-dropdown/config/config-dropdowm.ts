//Create dropdown
class ConfigDropdown {
    focusText?: string|null;
    options:{optionText:string,
            icon:string|null,
            type:string,
            metod:any|null,
            url:string|null}[];
    constructor(focusText:string|null,
                options: {optionText:string,
                            icon:string|null,
                            type:string,
                            metod:any|null,
                            url:string|null}[]
    ){
        this.focusText=focusText;
        this.options=options;
    }
}

const typeTitle=(optionText:string)=>{
    return {optionText:optionText,
            icon:null,
            type:"title",
            metod:null,
            url:null}
}
const typeMetod=(optionText:string,
                metod:any,icon:string|null)=>{
    return {optionText:optionText,
            icon:icon,
            type:"normal",
            metod:metod,
            url:null}
}
const typeUrl=(optionText:string,
               url:string,icon:string|null)=>{
    return {optionText:optionText,
            icon:icon,
            type:"normal",
            metod:null,
            url:url}
}

export{
    ConfigDropdown,
    typeTitle,
    typeMetod,
    typeUrl
}