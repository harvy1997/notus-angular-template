//Create dropdown
class ConfigNavbar {
    title:string|null;
    buttons:{text:string,metod:any,icon:string}[]|null;
    icons:{text:string,icon:any,rute:string}[]|null;
    constructor(title:string|null,
        buttons:{text:string,metod:any,icon:string}[]|null,
        icons:{text:string,icon:any,rute:string}[]|null
    ){
        this.title=title;
        this.buttons=buttons;
        this.icons=icons;
    }
}

export {
    ConfigNavbar
}