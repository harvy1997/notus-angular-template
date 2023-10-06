import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipBoardService {

    async copyJsonToTable(data:any[]){
        const tableBody = data.map(row => Object.values(row));
        const tabla=[
            Object.keys(data[0]), // Cabeceras de la tabla
            ...tableBody, // Datos de la tabla
        ]
        const copy=await navigator.clipboard.writeText(tabla.join('\n'));
        //manejo errores
    }

}