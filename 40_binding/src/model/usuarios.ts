export class usuarios {
    nombre: string = '';
    apellido: string = '';
    telefono: string = '';
    correo: string = '';
    img: string = '';
    constructor(nombre: string, apellido: string, telefono: string, correo: string, img: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.img = img;
    }
}