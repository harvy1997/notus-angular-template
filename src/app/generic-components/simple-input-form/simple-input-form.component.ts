import { Component,EventEmitter,Input, Output,ViewEncapsulation,signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  ValidatorFn,  Validators } from '@angular/forms';
import { ConfigForm } from './config/configForm.type';
import { InputSimpleForm } from './config/inputSimpleForm.type';
import { InputField } from './config/inputField.type';




@Component({
  selector: 'app-simple-input-form',
  templateUrl: './simple-input-form.component.html',
  styleUrls: ['./simple-input-form.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class SimpleInputFormComponent {

  @Input("Grid")
  public gridLg:number=4;

  @Input("Fields")
  public inputFields:InputField[]=[];

  @Input("config")
  public config:ConfigForm={};

  @Input("Reference")
  public objectReference:any={}

  @Output("result")
  eventForm = new EventEmitter<InputSimpleForm>();

  private _isGroup=signal(false);
  protected _groupForm=this.formBuilder.nonNullable.group({})
  protected _changeInput:string="";


  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    if(this.gridLg>4) this.gridLg=4;
    //if(this.inputFields.length<0) this.configurateObjectReference();   
  }
  ngOnChanges(){
    let objectCon:any={};
    if(this.inputFields.length>0 && !this._isGroup()){
      for (const field of this.inputFields) {
        objectCon[field.key]=new FormControl(
          {value:field.initialValue,disabled:field.disabled??false},
          {validators:this.setValidators(field),asyncValidators:field.customAsyncValidator});
      }
      this._groupForm=this.formBuilder.nonNullable.group(objectCon)
      if(this.config.customAsyncValidator) this._groupForm.setAsyncValidators(this.config.customAsyncValidator)
      if(this.config.customValidator) this._groupForm.setValidators(this.config.customValidator)
      this.eventForm.emit({data:this._groupForm.value,form: this._groupForm});
      this._isGroup.set(true)
    }
  }
  private setValidators(input:InputField){
    let {validators,customValidator}=input
    let response:ValidatorFn[]=[]
    response=response.concat(validators.map((validator:any)=>{
      if(validator.includes(",")) {
        let [a,b]=validator.split(",")
        let v=Validators[a as keyof ValidatorFn]
        return v ? (v as any)(b):null;
      }
      return Validators[validator as keyof ValidatorFn]
    }))
    if(customValidator) response=response.concat(customValidator)
    return response;
  }
  protected changeValue(){
    if(this.inputFields.length>0) this.eventForm.emit({data:this._groupForm.value,form: this._groupForm});
  }

  private configurateObjectReference(){
    for (const key in this.objectReference) {
      this.inputFields.push({key:key,validators:["required"],initialValue:""})
    }
  }

  public getErrorMsg( formInputName : string ) : string
  {  
    if(this._groupForm.errors || this._isGroup()){
      if(this._groupForm.get(formInputName)!.errors)
      //return (formInputName) ? this._groupForm.get(formInputName)!.errors : '';
      return ""
    
    }
    return ""
  }
  
}
 