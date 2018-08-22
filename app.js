//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
//const colors = require('colors'); //puede confundir con nombre de propiedades
const colors = require('colors/safe');

/*require('yargs').
command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }

    }).command('crear', 'Crea un archivo de texto con la tabla de multiplicar con una base y límite determinados', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }

    }).help()
    .argv;*/

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);


let comando = argv._[0];
switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => {
            //console.log(`Archivo creado: ${archivo}`.green);
            console.log(`Archivo creado: ${colors.green(archivo)}`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
}




// let base = process.argv[2].split('=')[1];


//console.log(argv.limite);
//console.log(argv2);

// crearArchivo(base).then(archivo => {
//     console.log(archivo);
// }).catch(err => {
//     console.log(err);
// });