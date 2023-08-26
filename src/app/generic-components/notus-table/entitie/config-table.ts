//Create table
const ConfigTable=(title:string,
                    color:"light"|"dark",
                    headers:string[],
                    data:RowTable[]
                    )=>{ 
    return {
        title,
        color,
        headers,
        data,
    }
}

class RowTable {
    columns:ColumnTable[];
    constructor(columns:ColumnTable[]) {
      this.columns = columns;
    }
}

class ColumnTable {
    text:string|null;
    bold:boolean;
    image:string|null;
    state:RowStateTable|null;
    imageArray:string[]|null;
    constructor(text:string|null,
                bold:boolean=false,
                image:string|null,
                state:RowStateTable|null,
                imageArray:string[]|null) {
      this.text = text;
      this.bold = bold;
      this.image = image;
      this.state = state;
      this.imageArray = imageArray;
    }
}

class RowStateTable {
    typeState:"bar"|"point";
    color:string;
    percent:number|null;
    constructor(typeState:"bar"|"point",
                color:string,
                percent:number|null
                ) {
    this.percent = percent;
    this.typeState = typeState;
    this.color = color;
    }
}

const ColorsRowStateOption={
    complete:"emerald",
    delayed:"red",
    schedule:"teal",
    pending:"orange",
}

export {
    ConfigTable,
    RowTable,
    ColumnTable,
    RowStateTable,
    ColorsRowStateOption
}