export type MenuModel={
    imagen:String,
    descripcion:String,
    hijos:MenuChildModel[]
}
export type MenuChildModel={
    url:String,
    descripcion:String
}