import { AsyncValidatorFn, ValidatorFn } from "@angular/forms"


export type ConfigForm={
    customValidator?:ValidatorFn[],
    customAsyncValidator?:AsyncValidatorFn[]    
}