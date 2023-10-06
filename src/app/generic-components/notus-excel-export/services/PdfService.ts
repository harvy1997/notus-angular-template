import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {
      
  exportToPdf(jsonData: any[],filename:string) {
    const tableBody = jsonData.map(row => Object.values(row));
    const documentDefinition:any = {
      content: [
        {
          table: {
            headerRows: 1,
            body: [
              Object.keys(jsonData[0]), // Cabeceras de la tabla
              ...tableBody, // Datos de la tabla
            ],
          },
        },
      ],
    };
    pdfMake.createPdf(documentDefinition).download(filename+'.pdf');
  }
  openPdf(jsonData: any[],filename:string) {
    const tableBody = jsonData.map(row => Object.values(row));
    const documentDefinition:any = {
      content: [
        {
          table: {
            headerRows: 1,
            body: [
              Object.keys(jsonData[0]), // Cabeceras de la tabla
              ...tableBody, // Datos de la tabla
            ],
          },
        },
      ],
    };
    pdfMake.createPdf(documentDefinition).open();
  }

}