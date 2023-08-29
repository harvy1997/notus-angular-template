//Create dropdown
class ConfigDropdown {
    focusText?: string|null;
    options:{optionText:string,
            type:string,
            metod:any|null,
            url:string|null}[];
    constructor(focusText:string|null,
                options: {optionText:string,
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
            type:"title",
            metod:null,
            url:null}
}
const typeMetod=(optionText:string,
                metod:any)=>{
    return {optionText:optionText,
            type:"normal",
            metod:metod,
            url:null}
}
const typeUrl=(optionText:string,
               url:string)=>{
    return {optionText:optionText,
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