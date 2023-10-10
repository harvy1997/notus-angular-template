class ConfigLogin {
    logo:string|null;
    signIn:any|null;
    forgotPassword:any|null;
    constructor(logo:string|null,
        signIn:any|null,
        forgotPassword:any|null
    ){
        this.logo=logo||"./assets/logoMiggoBlanco.png";
        this.signIn=signIn;
        this.forgotPassword=forgotPassword;
    }
}
export{
    ConfigLogin
}