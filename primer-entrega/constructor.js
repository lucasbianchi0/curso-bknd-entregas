

class Usuario{
    constructor(nombre,apellido, mascotas,libros){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }

    getFullNames(){
        return this.nombre + " "  + this.apellido
    }
    addMascota(mascota){
        const mascotas =this.mascotas.push(mascota)
        return this.mascotas
         
    }
    countMascota(){
        return this.mascotas.length

    }
    addBook(libro, creador){
        const libroNuevo = {nombre: libro, autor: creador}
        this.libros.push(libroNuevo)
        return this.libros

    }

    getBooksName(){
       return this.libros.map(name => name.nombre)
    }
}

const lucas = new Usuario("lucas", "bianchi",["cat","perro"],

 [{nombre:"true story", autor: "messi"},
 {nombre:"false story", autor: "eldiego"}])

console.log(lucas.getFullNames())
console.log(lucas.addMascota("foca"))
console.log(lucas.countMascota())
console.log(lucas.addBook("rich dad, poor dad", "RK"))
console.log(lucas.getBooksName())




