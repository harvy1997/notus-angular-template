import { ConfigDropdown } from "../../notus-dropdown/config/config-dropdowm";

//Create dropdown
class ConfigNavbar {
    title:{text:string,image:string|null}|null;
    properties:{bgColor:string,position:string}|null;
    buttons:{text:string,metod:any,icon:string}[]|null;
    icons:{text:string,icon:any,rute:string}[]|null;
    dropdowns:ConfigDropdown[]|null;
    constructor(title:{text:string,image:string|null}|null,
        properties:{bgColor:string,position:string}|null,
        buttons:{text:string,metod:any,icon:string}[]|null,
        icons:{text:string,icon:any,rute:string}[]|null,
        dropdowns:ConfigDropdown[]|null
    ){
        
        this.title=title;
        this.properties=properties==null?{bgColor:"bg-black",position:"fixed"}:properties;
        this.buttons=buttons;
        this.icons=icons;
        this.dropdowns=dropdowns;
    }
}

export {
    ConfigNavbar
}