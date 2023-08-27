import { Component,Input,signal } from '@angular/core';
import { configTable } from 'src/app/components/cards/card-social-traffic/card-social-traffic.component';

@Component({
  selector: 'generic-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  @Input('title')
  get title():string{return this._title()}
  set title(t:string){this._title.set(t)}
  protected _title=signal("")


  @Input("configTable")
  get configTable():configTable{return this._config()}
  set configTable(t:configTable){this._config.set(t);console.log("eche",t)}
  protected _config=signal<configTable>({
    header:[],
    properties:[]
  })

  @Input("data")
  get data():any[]{return this._data()}
  set data(t:any[]){this._data.set(t)}
  protected _data=signal<any[]>([])

  constructor() {}
}
