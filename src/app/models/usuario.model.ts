export class Usuario {

  constructor(
    public nombre:String,
    public apellido: String,
    public _id:String,
    public mail: String,
    public password? : String,
    public estado?: Number,
    public rol?: String,
    public img?: String,
    public telefono?: String
  ){
  }
}