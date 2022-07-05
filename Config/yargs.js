

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        describe: 'La base de la tabla de multiplicar',
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica el total de tablas de multiplicar a mostrar',
    })
    .check((argv,options) =>{
        if( isNaN(argv.base) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .option('l',{
        alias: 'listado',
        type: 'boolean',
        describe: 'Lista la tabla de multiplicación',
        demandOption: true
    })
    .argv

    module.exports = argv;
