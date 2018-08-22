const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.trap);
    }
}

let crearArchivo = async(base, limite = 10) => {
    let data = "";
    if (!Number(base)) {
        throw new Error(`el valor introducido ${base} no es un número`);
    }
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw new Error(err);
        else return `Archivo creado: tabla-${base}.txt`;
        //console.log(`El archivo tabla-${base}.txt ha sido creado`);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};