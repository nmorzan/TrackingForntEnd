export class Productor {

    constructor(
      public nombre:String,
      public apellido: String,
      public _id:String,
      public mail: String,
      public nameEmpresa: String,
      public provincia: String,
      public localidad: String,
      public password? : String,
      public estado?: Number,
      public productorNum?: String,
      public rol?: String,
      public img?: String,
      public telefono?: String,
      public createdAt?: Date
    ){
    }
}