import { AsyncValidatorFn, ValidatorFn } from "@angular/forms"

export type InputField={
    key:string,
    validators:string[],
    initialValue:any,
    name?:string,
    icons?:string
    disabled?:boolean
    type?:"number" | "text" | "email",
    customValidator?:ValidatorFn[],
    customAsyncValidator?:AsyncValidatorFn[]    
}