
const fs= require('fs')

class Contenedor {
    constructor (ruta){
        this.ruta = ruta
    }

    async save(obj){
       try{
            let dataArch = await fs.promises.readFile(this.ruta, 'utf8');
            let dataArchParse = JSON.parse(dataArch);

        
            if(dataArchParse.length){
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchParse, 
                    {...obj, id: dataArchParse[dataArchParse.length-1].id +1}],null , 2) )

            }else{
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id: 1}],null, 2))
            }
            console.log(`el archivo tiene el id;${dataArchParse.length +1}`)

       }catch(error){
            console.log(error)
       }
    }

    async getById(id){
        try{
            const dataArch= await fs.promises.readFile(this.ruta, 'utf8');
            const dataArchParse = JSON.parse(dataArch)

            let producto=  dataArch.find(producto=>producto.id === id)
            if(producto){
                console.log(producto)
            }else{
                console.log('no existe el producto')
            }

        }catch(error){
            console.log(error)

        }
    }

    async getAll(productos){
        try{
            const dataArch= await fs.promises.readFile(this.ruta, 'utf8');
            const dataArchParse= JSON.parse(dataArch)
            if(dataArchParse.length){
                console.log(dataArchParse)
            }else{
                console.log('no hay productos')
            }
        }catch(error){
            console.log(error)
        }   
    }

    async deleteById(id){
        try{
            let dataArch= await fs.promises.readFile(this.ruta, 'utf8');
            let dataArchParse= JSON.parse(dataArch)
           let producto= dataArchParse.find(producto=>producto.id ===id)
           if(producto.length){
              let dataParseFiltrado= dataArchParse.filter(producto=> producto.id != id);
              await fs.promises.writeFile(this.ruta, JSON.stringify(dataParseFiltrado,null,2),'utf8')
              console.log('producto eliminado')

            }else{
                console.log(' no se pudo')
            }
          
        }catch(error){
            console.log(error)
        }
    }

    async deleteAll(){
        try{
           let dataArch = await fs.promises.readFile(this.ruta, 'utf8');
           let dataArchParse = JSON.parse(dataArch);
           await fs.promises.writeFile(this.ruta, JSON.stringify("[]",null,2),'utf8')
           console.log('productos eliminados')

        }catch(error){
            console.log(error)
        }
    }

    
   
}

const contenedor =  new Contenedor('./productos.txt')
// contenedor.save({title: "remera negra",price: 500, categoria: "ropa"});
// contenedor.getAll()
console.log('syes')
// contenedor.deleteAll()

// contenedor.deleteById(5)