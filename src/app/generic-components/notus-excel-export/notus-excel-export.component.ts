import { Component, Input, OnInit } from "@angular/core";
import { ConfigDropdown, typeCheckBox } from "../notus-dropdown/config/config-dropdowm";
import { ConfigTable } from "../notus-table/config/config-table";
import { ExcelService } from "./services/ExcelService";
import { PdfService } from "./services/PdfService";
import { ClipBoardService } from "./services/ClipBoardService";

@Component({
  selector: "app-notus-excel-export",
  templateUrl: "./notus-excel-export.component.html"
})
export class NotusExcelExportComponent implements OnInit {

  @Input()
  configTable: ConfigTable | null = null;

  listCheckbox: any[] = [];
  configDropdown: ConfigDropdown | null = null;

  dataExport: any[] = [];
  headersExport: any[] = [];

  constructor(private excelService: ExcelService, private pdfService: PdfService, private clipBoardService: ClipBoardService) {
    this.configDropdown = new ConfigDropdown("Columnas visibles", "text-slate-700", this.listCheckbox)
  }

  ngOnInit(): void {
    if (this.configTable && this.configTable.config.headers) {
      for (const h of this.configTable.config.headers) {
        this.listCheckbox.push(typeCheckBox(h, this.toggleCheck));
      }
    }
  }

  toggleCheck = (title: string) => {
    if (this.configTable && this.configTable.config.headers) {
      for (let i = 0; i < this.configTable.config.headers.length; i++) {
        const h = this.configTable.config.headers[i];
        if (h == title) {
          this.configTable.config.properties[i].render = !this.configTable.config.properties[i].render;
        }
      }
    }
  }

  ajustarData() {
    if (this.configTable) {
      for (const object of this.configTable.data) {
        let element: any = {};
        for (let i = 0; i < this.configTable.config.properties.length; i++) {
          const property = this.configTable.config.properties[i];
          if (property.render && property.column != null) {
            element[this.configTable.config.headers[i]] = (Array.isArray(object[property.column]) ? object[property.column].join() : object[property.column])
          }
        }
        this.dataExport.push(element)
      }
    }
  }

  generateExcel() {
    this.ajustarData();
    if (this.configTable) {
      this.excelService.exportToExcel(this.dataExport, "data" + (new Date().getTime()));
    }
  }
  generatePDF() {
    this.ajustarData();
    if (this.configTable) {
      this.pdfService.exportToPdf(this.dataExport, "data" + (new Date().getTime()));
    }
  }
  openPrintPDF() {
    this.ajustarData();
    if (this.configTable) {
      this.pdfService.openPdf(this.dataExport, "data" + (new Date().getTime()));
    }
  }
  copyTable() {
    this.ajustarData();
    if (this.configTable) {
      this.clipBoardService.copyJsonToTable(this.dataExport);
    }
  }
  generateCSV() {
    this.ajustarData();
    if (this.configTable) {
        const tableBody = this.dataExport.map(row => Object.values(row));
        const csvContent =tableBody.join("\n");
        const blob = new Blob([csvContent], { type: "text/csv" });
        const enlace = document.createElement("a");
        enlace.href = URL.createObjectURL(blob);
        enlace.download =  "data" + (new Date().getTime())+".csv";
        enlace.click();
    }
  }

}