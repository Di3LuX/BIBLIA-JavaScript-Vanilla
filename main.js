////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// JAVASCRIPT ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Es un lenguaje de programacion de "alto nivel", diseñado con sintaxis de C.

    ●   Es un lenguaje orientado a "objetos" y "eventos"
    ●   Es dinamicamente tipado, es decir, que una variable puede tomar valores de distintos tipos.
    ●   Esta basado en prototipos.

  Su principal uso es permitir al desarrollador crear acciones en sus paginas web.
/*


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// CARACTERISTICAS DE JAVASCRIPT //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Lenguaje multiplataforma.
  Es interpretado, no se compila para ejecutarse.
  Es multiproposito, se puede utilizar en Frontend y Backend.
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// COMO SE UTILIZA JAVASCRIPT ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Utilizando la etiqueta script en el propio html. (no recomendado)

  Importando el script directamente al "final del body".
  ●  <script src=""/>

  Asi como en html "siempre" es imperativo tener un documento del tipo "index.html"...
  en JS utilizaremos el nombre "main.js" para dar lugar a nuestro "principal" archivo JS.
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// SINTAXIS //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Sentencias:
    Las aplicaciones de JS se componen de "sentencias" con una sintaxis propia.
    Una sentencia puede estar formada por multiples lineas.
    Puede haber varias sentencias en una sola linea si separamos cada una de las sentencias por un punto y una coma ";"
    Recuerda, no es una palabra clave, sino un grupo de palabras clave.


  Control de flujo:

    ●   Block:
          Un bloque de sentencias se utiliza para agrupar cero o mas sentencias.
          El bloque se delimita por un par de llaves o bigotes "{}"

    ●   Break:
          Finaliza la sentencia actual de un loop, switch o label, transfiriendo el control del programa a la siguiente sentencia.
          Es decir, utilizamos el "break" para "salir" de esta sentencia.

    ●   Continue:
          Finaliza la sentencia actual, dentro de la iteracion, del actual bucle y continua la ejecution en la siguiente iteracion.

    ●   Empty:
          Una sentencia vacia se utiliza para proveer una "no sentencia", aunque JS esperaba una.

    ●   If ... Else:
          Ejecuta una sentencia si una condicion es true, si es false, se ejecutara otra.

    ●   Switch:
          Evalua una expresion, igualando este valor en una clausula "case" y ejecuta las sentencias asociadas a dicho "case"

    ●   Throw:
          Lanza una excepcion definida por el usuario

    ●   Try ... Catch:
        Marca un bloque de sentencias para ser probadas por (try) y especifica una respuesta, en caso de que se lance una excepcion.


  Declaraciones:

    ●   Var:
          Declara una variable, opcionalmente inicializandola a un valor.

    ●   Let:
          Declara una variable local de "ambito de bloque", opcionalmente inicianizandola a un valor.

    ●   Const:
          Declara una constante de solo lectura


  Funciones:

    ●   Function:
          Declara una funcion con los parametros especificados.

    ●   Class:
          Declara una clase.

    ●   Return:
          Especifica el valor retornado por una funcion.


  Iteraciones:

    ●   do ... while:
          Crea un loop (bucle) que ejecuta una intruccion especificada hasta que la condicion de prueba se evalua como "falsa"
          La condicion se evalua despues de ejecutar la instruccion, lo que da como resultado que esta se ejecute al menos una vez.

    ●   for:
          Crea un loop que consiste en tres expresiones opcionales, engobadas con "parentesis" y separadas por ";" seguidas de declaraciones ejecutadas por dicho loop.

    ●   for each ... in
          Itera una variable especificada sobre todos los valores de las propiedades del objeto.
          Para cada propiedad distinta, se ejecuta una instruccion especificada.

    ●   for ... in
          Itera sobre las propiedades enumerables de un objeto, en orden alibitrario.
          Para cada propiedad distinta, las intrucciones pueden ser ejecutadas.

    ●   for ... of


    ●   While
          Crea un bucle que ejecuta la intruccion especificada siempre que la condicion de la prueba se evalue como verdadera.
          La condicion se evalua antes de ejecutar la instruccion.

  Comentarios:

    Utilizaremos las dos barras "//" para comentar tan solo una linea...
    Ej:
    //Esto es un comentario.

    En cambio, si queremos comentar un bloque de lineas, utilizaremos "/*"
    para la apertura de dicho comentario, y para el cierre.


*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// KATA 1 "console.log()"" ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Utilizaremos "console.log("Hola Mundo Cruel")" para que en la consola de nuestro navegador nos muestre
  el flujo, en este caso, las comillas "" actuaran como un "string" o cadena de texto
  y todo lo que englobe estas comillas, sera transformado en string, tanto numeros como variables, etc.
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// VARIABLES "var / let" ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Las variables son la forma en la que JS almacena datos con un nombre asignado, para poder nosotros
  indentificarlas.
  Anteriormente, se utilizaba la palabra "var", ahora cambiaremos por "let" que para que nos entendamos,
  significara "sea" segido del operador de asignacion "=" y el tipo de dato que querramos almacenar.

    ● EJ: let numero = 1
    Es decir "sea" numero igual a 1.
    En este caso le estamos asignando o "declarando" el valor "1" a la variable "numero"

        var dia = "Lunes";
        console.log(dia);

        var vacia = "";
        console.log(vacia);

        var dormir = false;
        console.log(dormir);

        var dias = "5";
        console.log(typeof(dias)); // utilizaremos "typeof" para conocer el tipo de la variable

    */



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// TIPOS DE DATOS ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Los datos especifican que tipo de valor se guardara en la variable y se categorizan en dos grupos:

    Simples:

      ●  number = 1
      ●  string = 'holita'
      ●  boolean (switch)= true/false o 0/1
      ●  undefined = que no se define
      ●  function = (conjunto de instrucciones)

    Complejos:

      ●  object
      ●  object / null
      ●  object / array
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// NUMEROS ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  En JS solo existe un tipo de dato numerico.
  Todos estos se representan a traves del formato de punto flotande de 64 bits (max 10^308)
  Esta forma es el llamado double en los lenguajes Java o C++.
    ●  89;
    ●  -43;
    ●  0.4;
    ●  0.33333;
    ●  -0.3;
    ●  1e3;
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// BOOLEANOS /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Tambien conocido como "valor logico", solo admite dos valores "true or false" / "0 or 1"
  Es muy util a la hora de evaluar expresiones logicas o verificar condiciones.
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// CADENAS DE TEXTO "STRING" //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

  Toda cadena de texto se representa entre comillas, ya sean simples '' o dobles ""
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// NULL /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Es un valor null representa un objeto nulo o vacio.
  https://www.youtube.com/watch?v=fUbx8bD4aFQ&ab_channel=WmediaporJuanAndr%C3%A9sN%C3%BA%C3%B1ez
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// UNDEFINED /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Corresponde a una variable a la cual no se le asigno un valor.
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// OPERADORES /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Existen varios tipos de operadores en JS:

    ●  Aritmeticos
    ●  Logicos
    ●  De asignacion
    ●  De comparacion
    ●  Condicionales/Ternarios
    ●  Cadenas de caracteres
    ●  Operador coma
    ●  Operadores unarios
    ●  Operadores de bit a bit

Aritmeticos:
  Permite realizar calculos elementales entre variables numericas:

    ●   + Suma
    ●   - Resta
    ●   * Multiplicación
    ●   / División
    ●   % Módulo (resto)
    ●   ** exponente (elevar a )
    ●   ++ Incremento (sumar 1 a)
    ●   -- Decremento (restar 1 a)

    ● EJ:


        var numero1 = 50;
        var numero2 = 73;

        var resultado = numero1 + numero2;
          console.log(resultado);

        resultado = numero1 - numero2;
        resultado = numero1 * numero2;
        resultado = numero1 / numero2;
        resultado = numero1 % numero2;
          console.log(resultado);

        var numero = 5;

        var resultado = numero ** 2;

        var numero = 665;

        numero++;
          console.log(numero);

          console.log("2"-"6");

        var variableOk = 13413452345;
        console.log("variableOk vale ..... ", variableOk,12);

        var numero1 = 11;
        var numero2 = 22;

        numero1 = numero1 + 11;
        numero2 += 11;


Aritmeticos Especiales:

    ●   - Negación unaria
        console.log(-"3");
    ●   + Unario positivo
        console.log(+"3");
    ●   ** Exponente
        2 ** 3
        10 ** -1

Logicos:

    ●   && Y / AND
    ●   || O / OR
    ●   != No / NO

    ● EJ:

        var nombre = "Jesus";
        var edad = 22;

        if((nombre == "Jesus") && (edad == 26)){
            console.log("Que bien me cae este chico");
        }else{
            console.log("Ya no me cae bien");
        };

        if((nombre == "Jesus") || (edad == 26)){
            console.log("Que bien me cae este chico");
        }else{
            console.log("Ya no me cae bien");
        };


Asignacion:
  Permiten obtener metodos abreviados para evitar escribir dos veces la variable que se encuentra
  a la izquierda del operador:

    ●   = asigna var a = 1
    ●   += Suma y asigna a += 2 // a = a + 2
    ●   -= Resta y asigna a -= 2 // a = a - 2
    ●   *= Multiplica y asigna a *= 2 // a = a * 2
    ●   /= Divide y asigna a /= 2 // a = a / 2
    ●   %= Módulo y asigna a %= 2 // a = a % 2
    ●   **= Asignación de exponenciación a **= 2 // a = a ** 2 Binarios:
    ●   <<= Asignación de desplazamiento a la izquierda
    ●   >>= Asignación de desplazamiento a la derecha
    ●   >>>= Asignación sin signo de desplazamiento a la derecha
    ●   &= Asignacion AND
    ●   ^= Asignación XOR
    ●   |= Asignación OR

Comparacion:
  Permite comparar todo tipo de variables y devuelve un valor booleano.

    ●   < Menor que
    ●   <= Menor igual que
    ●   == Igual
    ●   > Mayor que
    ●   >= Mayor o igual ue
    ●   != Diferente
    ●   === Estrictamente igual
    ●   !== Estrictamente diferente
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// EJECUCION SECUENCIAL /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  En JavaScript, todo se ejecuta de arriba a abajo.
  Este flujo se puede alterar gracias a un conjunto de palabras clave llamadas "Estructuras de Control"
  Existen varias categorias de estructuras:

    ● Condicionales.
    ● Bucles.
    ● Funciones.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// IF / ELSE //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
IF:

  El "if" es la sentencia de JS que nos permite decidir que parte del codigo se ejecute dependiendo de un valor ("si" se da este valor)
  Es decir, crea condiciones en nuestro programa:

    ● if( "Condicion == True"  ) {
        Se ejecuta nuestro código.
      }

IF/ELSE:

  Ademas de "if", podemos complementar nuestra condicion con la sentencia else.
  Esto nos permite ejecutar otra parte del codigo si la condicion es falsa:

    ● if( "Condicion == True"  ) {
          Se ejecuta nuestro código.
      } else {
        Se ejecuta solo si la condicion es == Flase
      }

IF/IF ELSE/ELSE:

  Por ultimo tenemos el "if else", que nos permite proponer varias condiciones, ejecutando unicamente la que sea true.
  Si ninguna de ellas es true, se ejecutara el bloque con else:

    ● if(Condición_1 == True) {
          Se Ejecuta SOLO si la condición_1 == True
      } if else (Condición_2 == True) {
          Se Ejecuta SOLO si la condición_2 == True
      } else {
          Se Ejecuta SOLO si ninguna condicion
          anterior es True
}

If Anidados:

  En los bloques "if" podemos añadir otro "if", a esto lo llamamos anidacion de If o If Anidados:

    let edad = prompt('¿Cuál es tu edad?');
    let acompañado = prompt('¿Cuál es tu edad?');

    let eresAdulto = edad >= 18;
    let estasAcompañado = acompañado === 'SI';

    if(eresAdulto || estasAcompañado){
      console.log('Puedes Entrar');
    } else {
      console.log('Debes ser Mayor de Edad o estar acompañado');
}

  Aunque es una buena práctica usar operadores lógicos como AND (&&) o OR ( || ) para evitar anidar varios If.

  También es una buena práctica guardar las condiciones en variables para que todo sea más LEGIBLE.


    ● EJ1:

        if(nombre != "Ambrosio"){
            console.log("Bieeeeeeeeeeeeeeeeen");
        }else{
            console.log("Maaaaaaaaaal");
        };

        var tiempoLibre = false;

        if(!tiempoLibre){
            console.log("Que agonia");
        }

    ● EJ2:

        var edad = 21;

        if(edad >= 18){
            console.log("Puedes ver la pelicula");
        }else{
            console.log("Espera a los 18 años");
        };

        var numero = 18;
        var letra = "18";

        if(numero === letra){
            console.log("somos iguales");
        };

    ● EJ3:

        var coche = "Seat";

        if(coche == "Renault"){
            console.log("Es un renault");
        }else if(coche == "Seat"){
            console.log("Es un seat");
        }else{
            console.log("Es otro coche");
        }
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// SWITCH ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  El switch (interruptor) es otra sentencia que nos ofrece crear condicionales.
  Su sintaxis es mas densa, pero nos puede servir en ocaciones concretas.
  Tenemos palabras claves como: "case" "break" y "default" como complementos del switch,
  donde "case" serian los "if" y "default" los "else"

    switch( condicion ){

        case 1:
          Codigo
        break;

        case 2:
          Codigo
        break;

        default:
          Codigo
        break;
    }

    ● EJ1:

      var dia = "Lunes";

      switch(dia){
        case 'Lunes':
            console.log("Es Lunes....");
        break;

        case 'Martes':
            console.log("Es Martes....";)
        break;

        case 'Miercoles':
        break;

        case 'Jueves':
        break;

        case 'Viernes':
        break;

        case 'Sabado':
        break;

        case 'Domingo':
        break;

        default:
            console.log("No es ninguno de los anteriores");
        break;
        }

    ● EJ2:

      switch(dia){
        case 'Lunes':
        case 'Martes':
        case 'Miercoles':
        case 'Jueves':
        case 'Viernes':
            console.log("Entre semana....")
        break;

        case 'Sabado':
        case 'Domingo':
            console.log("Es fin de semana...")
        break;

        default:
            console.log("No es ninguno de los anteriores")
        break;  
      }
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// OPERADOR TERNARIO (?:) ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  A diferencia de If y Switch, existe un operador (simbolo) que nos permite hacer una condicion
  con una sintaxis super simplificada.

  Su uso mas comun es cuando el valor de una variable depende de una condicion.
  Entonces podemos usar el ternario... El ? simboliza la condicion verdadera y : la condicion falsa.

  ● EJ:1

    let edad = 18;
    let verPeliculaTerror;

  // Opción 1
    if (edad >= 18){
    verPeliculaTerror = 'SI';
    }else {
    verPeliculaTerror = 'NO';
    }

  // Opción 2
    let verPeliculaTerror = (edad >= 18)
    ? 'SI'
    : 'NO'

  ● EJ:2

      let edad = 16;

      let resultado = (edad <= 16) ? "No puedes conducir en USA" : "Si que puedes chaval";

  Es una bifurcacion que evalua lo que hay entre parentesis...
  Si es "true" utiliza el valor que va despues del interrogante,
  si es "false" utiliza lo que va despues de los puntos.

  ● EJ:3

    let edad = 16;
    
    let resultado = (edad <= 16) ? "No puedes conducir en USA" : "Si puedes";
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// BUCLES ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  While: (mientras...)
    Es una sentencia de JS preparada para crear bucles, es decir, repetir un fragmento de codigo "N" veces
    Al igual que el If, tenemos una condicion para ejecutar el bloque. Mientras esta sea true,
    el bloque seguira ejecutandose.

    Hay que poner especial atencion con estos bucles, ya que pueden petar nuestro programa y PC

    Para esto, tenemos un Iterador que se encarga de romper este bucle cuando nos haga falta.
    Un "iterador" es un objeto que permite recorrer una colección y devolver un valor al terminar.

    ● EJ:1
    
         let dinero = 50;

         while(dinero >= 0){
             if(dinero == 0){
                 console.log("Pelat")
             }else {
                 console.log("Estoy comprando..... y me quedan", dinero, " euros");
             }
             dinero -= 5;
         };
         console.log("Odio aparcar en Ruzafa");


    ● EJ:2

        TABLA DE MULTIPLICAR 1...10

             let c = 1;
             let tabla = parseInt(prompt("Quiero la tabla del...."));

             while(c <= 10){
                 console.log(tabla , "por", c, " es ", c * tabla);
                 c++;
             };
        };

  Do while (haz mientras...)
    Esta es la segunda forma de JS para realizar bucles, pero ah! con dos diferencias...
    La primera, su sintaxis, cambia un poco empezando por un "do" sin condiciones y acaba con un while.
    La segunda, su comportamiento, se ejecuta siempre una vez (aunque la condicion sea falsa) es decir,
    siempre entrara 1 vez en el bucle y luego comporbara las condiciones para realizar dicha repeticion.

      let saldo = 10;

      do{
        console.log('Has consumido 1€');
        saldo -= 1; // Iterador
        console.log('Te queda ' + saldo);
      }while( saldo > 0)

  for:
      Por ultimo tenemos el "for" como sentencia para crear bucles.
      La diferencia con los tres anteriores es su condicion en 3 pasos (separada por ";")

        for (let i = 0 ; i < 10 ; i++){
          console.log(i);
        }

        1. let i = 0; ->  Inicializar el Iterador.
        2. i < 10; ->     Condición del Bucle.
        3. i++ : ->       El incrementador del Iterador

        ● EJ
        
          let tabla = 3;

          for(let i = 1; i <= 10; i++ ){
            console.log(tabla * i);
          };
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// FUNCIONES ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Function:
  Son bloques de codigo que se declaran una vez y se pueden ejecutar cada vez que se necesite.
  Se utiliza la sentencia "function" y un nombre para declararlo (siempre con la primera en mayuscula) luego entre parentesis, se declaran los "parametros"
  Dentro de las llaves, declaramos el codigo, el cual puede terminar con "return".
  Esta palabra clave sirve para hacer que la funcion devuelva un tipo de dato.

        function Suma(num1, num2) {
          return num1 + num2;
        };

        function Log(data) {
          console.log(data)
        };

        Log('Hola, Mundo!');
        Log( Suma (1,2));


Funcion anonima:
  Si bien la declaracion de la funcion anterior es sintacticamente una sentencia, las funciones pueden tambien ser creadas por una expresion de funcion.
  Tal funcion puede ser anonima, no debe tener un nombre.
  Por ejemplo, la funcion "square" podria haber sido definida como:

        var square = funciton (numbrer) {
          return number * number;
        };
        var "x" = square(4); // "x" obtiene el valor 16


Llamando funciones:
  Definir una funcion no la ejecuta.
  Definir una funcion simplemente la nombra y especifica que hacer cuando la funcion es llamada.
  "Llamar" a la funcion es lo que realmente realiza las acciones especificadas con los parametros indicados.
  Por ejemplo, si definimos la funcion square nuevamente, podriamos llamarla asi:
        square(5)
  La sentencia anterior llama a la funcion con el argumento 5.
  La funcion ejecuta sus sentencias y retorna el valor 25.

        ● EJ1
            function Sumar(num1, num2){
                return num1 + num2; 
            };

            let resultadoDeSumar = Sumar(3,4);
            let resultadoDeSumarDeNuevo = Sumar(6,7);

            console.log(resultadoDeSumar);

            //Esto corresponde a la DECLARACION de la función//
            
            function Sumar(num1,num2){
                return console.log(num1 + num2);
            };

            //Aqui es cuando se ejecuta//

            Sumar(2,3);

            let contenedor = function (num1,num2){ return num1 - num2};
            console.log(contenedor(4,2));
        ● EJ2

            function Dividir(num1,num2){
                let resultado = num1 / num2;
                return resultado;
            };

            let resultadoDeDividir = Dividir(10,5);
            console.log(resultadoDeDividir);

            let resultado = function () { 
                let num1 = parseInt(prompt("Dime una base"));
                let num2 = parseInt(prompt("Dime el exponente"));
                return console.log(num1 ** num2);
            };
            resultado()
        ● EJ3

            function Elevar(){
                let num1 = parseInt(prompt("Dime el numero base"));
                let num2 = parseInt(prompt("Dime el exponente"));
                let resultado = num1 ** num2;
                return console.log(resultado);
            };

            Elevar();
            function Elevar(pepe,manolo){
                return console.log(pepe ** manolo);
            };

            let num1 = parseInt(prompt("Dime el numero base"));
            let num2 = parseInt(prompt("Dime el exponente"));
            Elevar(num1,num2);
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// ARRAY ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

El objeto "array" de JS es un objeto global que se usa en la construccion de "listas de alto nivel".
Para definirlas
Los arrays son objetos similares a listas cuyo prototipo proporciona metodos para efectuar operaciones de recorrido y de mutacion.
Tanto la longitud (lenght) como el tipo de elementos de un array son variables.
Dado que la longitud puede variar en cualquier momento, y que los datos se pueden almacenar en ubicaciones no contiguas,
no hay garantia de que estos arrays sean densos.
Esto ultimo depende de como y para que elijamos usarlas.

            ● EJ1
                let manelHobbie1 = "Tocar el bajo";
                let manelHobbie2 = "Leer";
                let manelHobbie3 = "Cine";
                let manelHobbie4 = "Programación";

                let manelArrayHobbies = ["Tocar el bajo","Leer","Cine","Programación"];
                  console.log(manelArrayHobbies[2]);


            ● EJ2
                let bebida = "Agua";
                let comida = "Pan duro";
                let numero = 8;

                let hobbiesLiza = ["Leer","Running","Estudiar programación"];

                let arrayClase = [bebida,comida,numero,hobbiesLiza];
                  console.log(arrayClase);


Metodos mas utilizados en un array:


      ●   push()
            Añade nuevos elementos al array devolviendo una nueva longitud de esta.

                var numeros = [1, 2, 3];
                var newLength = numeros.push(100);

                console.log(newLength);
                console.log(numeros); // [1,2,3,100]

                numeros.push(200, 400);
                console.log(numeros); // [1,2,3,100,200,400]


      ●   concat()
            Selecciona un array y lo concatena con otros elementos en un "nuevo array"

                var equipos_a = ['Valencia', 'Barça', 'Real Madrid'];
                var equipos_b = ['Hercules', 'Zaragoza', 'Valladolid'];
                var equipos_copa = equipos_a.concat(equipos_b);

                console.log(equipos_copa);    // ["Valencia", "Barça", "Real Madrid",
                "Hercules", "Zaragoza", "Valladolid"]
                console.log(equipos_a);       // ["Valencia", "Barça", "Real Madrid"]

              ● EJ
                  concat, concatena arrays, obviamente
                  let bebidasFrutas = frutas.concat(bebidas);


      ●   join()
            Concatena elementos de un array en una sola cadena "separada" por un "caracter opcional"

                var nombres = ['Manuel', 'Antonio', 'Pepe'];
                console.log(nombres.join('-')); //"Manuel-Antonio-Pepe"

              ● EJ
                convierte en string el array al que llamemos y le añade de por medio, lo que añadamos
                let juntos = frutas.join(" / ")


      ●   reverse()
            Invierte el orden de los elementos de un array.

                var nombres = ['Manuel', 'Antonio', 'Pepe'];
                nombres.reverse();
                console.log(nombres); // ["Pepe", "Antonio", "Manuel"]


      ●   unshift()
            Añade nuevos elementos al inicio de un array y devuelve el numero de elemntos del nuevo array modificado.

                var nombres = ['Manuel', 'Antonio', 'Pepe'];
                var valor_nombres = nombres.unshift('Jesús');
                console.log(valor_nombres); // 4
                console.log(nombres); // ["Jesús","Manuel","Antonio","Pepe"]


      ●   shift()
            Elimina el primer elemento de un array y devuelve el elemento extraido.

                var nombres = ['Manuel', 'Antonio', 'Pepe'];
                var valor_resto = nombres.shift();
                console.log(valor_resto); // Manuel
                console.log(nombres); // [ 'Antonio', 'Pepe' ]


      ●   pop()
            Elimina el ultimo elemento de un array y lo devuelve.

                var nombres = ['Manuel', 'Antonio', 'Pepe'];
                console.log(nombres.pop()); // Pepe
                console.log(nombres); // [ 'Manuel', 'Antonio' ]


      ●   slice()
            Devuelve un nuevo array con un subconjunto de los elementos del array que ha usado el metodo.


      ●   sort()
            Ordena alfabeticamente los elementos de un array.
            Podemos definir una nueva funcion para ordenarlos con otro criterio.


      ●   splice()
            Elimina, sustituye o añade elementos del array dependiendo de los argumentos del metodo.


Crear un array:

        let frutas = ["Manzana", "Banana"]

        console.log(frutas.length)  // 2

Accede a un elemento del array mediante su indice.

        let primero = frutas[0]
        // Manzana

        let ultimo = frutas[frutas.length - 1]
        // Banana


Recorrer un array:

        frutas.forEach(function(elemento, indice, array) {
            console.log(elemento, indice);
        })
          // Manzana 0
          // Banana 1

Encontrar el indice de un elemento del array:

        frutas.push('Fresa')
            // ["Manzana", "Banana", "Fresa"]

        let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
            // 1
          
          ● EJ
              let frutas = ["Manzana","Pera","Pomelo","Tomate","Banana"];
              let bebida = ["Agua","Fanta","Cola","Gazpacho","Ron"];

              console.log(frutas.length);
            // Indice del total objetos dentro del array, no de la posicion //


Eliminar un unico elelemnto mediante su posicion.
        ● EJ

            let elementoEliminado = frutas.splice(pos, 1)
            // ["Manzana", "Fresa"]

      Eliminaremos "Banana" del array pasandole dos parametros: la posicion del primer elemento que se elimina y el numero de elementos que queremos eliminar.
      De esta forma, ".splice(pos,1) empieza en la posicion que nos indica el valor de la variaable "pos" y elimina 1 elemento.
      En este caso, como pos vale 1, elimina un elemento comenzando en la posicion "0" del array, en este caso "Banana" esta en la posicion "1"

Eliminar varios elementos a partir de una posicion:

        ● EJ

            let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
              console.log(vegetales)
            // ["Repollo", "Nabo", "Rábano", "Zanahoria"]

            let pos = 1, numElementos = 2

            let elementosEliminados = vegetales.splice(pos, numElementos)
            // ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

            console.log(vegetales)
            // ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

      Con ".splice()" no solo podemos eliminar elementos del array, sino que podemos extraerlos guardandolos en un nuevo array.
      Cuidado, porque al hacer esto estariamos modificando el array de origen.

Filtrar elementos en una array:

        ● EJ
            let videojuegos = ["","","","",""];

            let posibles = videojuegos.filter(juego => juego != "lol")

            //Filtras elementos en una array y deshecha o los muestra.//
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// KATA /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Letra del DNI:

        Crearemos una funcion que valide que un numero de DNI y una letra son compatibles.
        Para ello nocesitamos el siguiente algoritmo:

          1. Realizar el módulo del número del DNI
          entre 23.

          2. El resultado de ese módulo es la posición
          del siguiente array.
          TRWAGMYFPDXBNJZSQVHLCKET

            ● EJ1

              let num = parseInt(prompt("numero"));

              let letra = prompt("letra");

              let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

              letra = letra.toUpperCase();

              let pos = num % 23;

              if (letra == letras[pos]) {
                console.log("es correcto");
              } else {
                console.log("no es correcto");
              };

            ● EJ2

              let num = parseInt(prompt("Dame un numero"));

              let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

              let pos = num % 23;

              let tuLetra = letras[pos];

              console.log("Te corresponde la letra " + tuLetra);
/*



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// OBJETOS //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Object:
  Un objeto es un valor en memoria al cual es posible referirse mediante un identificador.

  En JS los objetos pueden ser vistos como una coleccion de propiedades.
  Con la sintaxis literal de objetos, un limitado grupo de propiedades son inicializadas; luego, pueden ser agregadas o eliminadas
  otras propiedades.

  Los valores de estas propiedades pueden ser de cualquier tipo, incluyendo otros objetos, lo cual permite construir estructuras de datos complejas.

  Las propiedades se identifican usando claves.

  Una clave es un valor "String" o Symbol.


Sintaxis:
  Asocia una clave con un valor y tiene los siguientes atributos:

      {
      clave: 'valor',
      clave2: 1234,
      'clave3': [],
      }


Clave: valor
  En definitiva, un objeto es una lista de pares de llaves y valores.
  Pero tambien tenemos funciones que son objetos regulares con una capacidad adicional de poder ser llamados o invocados.


OBJETOS: JSON "javascript object notation"
  Entidad que tiene valores y un comportamiento porpio.
  El ladrillo para construir nuestro poryecto.
*/