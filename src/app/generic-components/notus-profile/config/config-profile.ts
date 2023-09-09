//Create dropdown
class ConfigProfile {
    image:string|null;
    nombre:string|null;
    sede:string|null;
    informacionGeneral:{dataName:string|null,dataValue:string|null}[];
    empresa:string|null;
    rol:string|null;
    sobreMi:string|null;
    fechaCreacion:Date|null;
    pendientes:number|null;
    notificaciones:number|null;

    constructor(image:string|null,
        nombre:string|null,
        sede:string|null,
        informacionGeneral:{dataName:string|null,dataValue:string|null}[],
        empresa:string|null,
        rol:string|null,
        sobreMi:string|null,
        fechaCreacion:Date|null,
        pendientes:number|null,
        notificaciones:number|null
        ){
        this.image=image;
        this.sede=sede;
        this.nombre=nombre;
        this.empresa=empresa;
        this.rol=rol;
        this.sobreMi=sobreMi;
        this.fechaCreacion=fechaCreacion;
        this.pendientes=pendientes;
        this.notificaciones=notificaciones;
        this.informacionGeneral=informacionGeneral;
    }
}

export {
    ConfigProfile
}