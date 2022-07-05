
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');

const CrearTabla = (argv ) =>{

    return new Promise( (resolve,reject) =>{
      

        
    for(let a=0; a <= argv.h; a++){
        let salida = '';  
        for( let i = 1; i <= 10; i++ ){
            salida += `${a} * ${i} = ${ a * i } \n`;
        }
        
        if(argv.l){
            console.log('===============================');
            console.log(`Tabla de multiplicar ${a}`.rainbow);
            console.log('===============================');
            console.log(salida);
            
        }
    }
    
    });
}

module.exports = {
   CrearTabla
}