/***** DESAFIO 2 *****/
function operacionesBasicas() {
    alert('Operaciones básicas con 2 números');
    //INGRESO LOS DOS VALORES SOLICITADOS Y VALIDO MAYOR A CERO
    let ingresaNumeroUno = parseFloat(prompt('Ingresa el primer número (mayor que 0)'));
    while (ingresaNumeroUno <= 0) {
        ingresaNumeroUno = parseFloat(prompt('Ingresa el primer número (DEBE SER MAYOR A 0)'));
    }

    let ingresaNumeroDos = parseFloat(prompt('Ingresa el segundo número (mayor que 0)'));
    while (ingresaNumeroDos <= 0) {
        ingresaNumeroDos = parseFloat(prompt('Ingresa el segundo número (DEBE SER MAYOR A 0)'));
    };


    //REALIZO LAS 5 OPERACIONES SOLICITADAS
    let suma = ingresaNumeroUno + ingresaNumeroDos;
    let resta = ingresaNumeroUno - ingresaNumeroDos;
    let multiplica = ingresaNumeroUno * ingresaNumeroDos;
    let divide = (ingresaNumeroUno / ingresaNumeroDos).toFixed(1);
    let modulo = ingresaNumeroUno % ingresaNumeroDos;

    //PRESENTO LOS RESULTADOS
    alert(`La suma de los dos valores ingresados es: ${suma},
La resta de los dos valores ingresados es: ${resta},
La multiplicación de los dos valores ingresados es: ${multiplica},
La división de los dos valores ingresados es: ${divide},
El módulo de los dos valores ingresados es: ${modulo}, 
`);
}
/* eliminados alerts para ser menos invasivo
alert('La suma de los dos valores ingresados es: ' + suma);
alert('La resta de los dos valores ingresados es: ' + resta);
alert('La multiplicación de los dos valores ingresados es: ' + multiplica);
alert('La división de los dos valores ingresados es: ' + divide);
alert('El módulo de los dos valores ingresados es: ' + modulo);
*/


/***** DESAFIO 3 *****/
function temperatura() {
    alert('Calculo de temperaturas');
    // INGRESO VALOR SOLICITADO
    let ingresaTemperatura = parseFloat(prompt('Ingresa una temperaturaen Celsius'));

    //CALCULO TEMPERATURAS EN Kº y Fº
    let kelvin = ingresaTemperatura + 273.15;
    let farenheit = (ingresaTemperatura * (9 / 5)) + 32;

    //PRESENTO LOS RESULTADOS
    alert(`La temperatura ingresada corresponde a: 
${kelvin}º Kelvin,
${farenheit}º Farenheit`);
}


/***** DESAFIO 4 *****/
function calculoDias() {
    alert('Calculo de años y semanas');
    // INGRESO LA CANTIDAD DE DÍAS A CALCULAR
    let ingresoDias = parseInt(prompt('Ingresa una cantidad de días:'));
    while (ingresoDias <= 0) {
        ingresoDias = parseFloat(prompt('Ingresa una cantidad de días mayor a:'));
    }

    //CALCULO AÑOS
    let years = Math.floor(ingresoDias / 365);
    //calcula resto para sacar semanas
    let restoYears = ingresoDias % 365;
    //CALCULO SEMANAS
    let semanas = Math.floor(restoYears / 7);
    // calculo resto para sacar días
    let dias = restoYears % 7;

    //PRESENTO RESULTADOS
    alert(`La cantidad de días ingresados corresponde a:
${years} años,
${semanas} semanas, 
${dias} días. `);
}


/***** DESAFIO 5 *****/
function sumaPromedio() {
    alert('INGRESA5 VALORES');
    // SOLICITO LOS 5 VALORES
    let sumando1 = parseFloat(prompt('Ingresa el primer número:'));
    let sumando2 = parseFloat(prompt('Ingresa el segundo número:'));
    let sumando3 = parseFloat(prompt('Ingresa el tercero número:'));
    let sumando4 = parseFloat(prompt('Ingresa el cuarto número:'));
    let sumando5 = parseFloat(prompt('Ingresa el quinto número:'));

    let sumaCincoNumeros = sumando1 + sumando2 + sumando3 + sumando4 + sumando5;
    let promedioCincoNumeros = (sumando1 + sumando2 + sumando3 + sumando4 + sumando5) / 5;

    alert(`La suma de los 5 números es : ${sumaCincoNumeros},
el primero de los 5 números es: ${promedioCincoNumeros}.`);
}