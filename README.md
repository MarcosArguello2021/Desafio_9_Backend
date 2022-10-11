# **Desafío: Mocks y normalización**. Curso CoderHouse Backend Node.Js

## Consigna 1:

Sobre el desafío entregable de la clase 16, crear una vista en forma de tabla que consuma desde
la ruta ‘/api/productos-test’ del servidor una lista con 5productosgenerados al azar utilizando
Faker.jscomo generador de información aleatoria de test (en lugar de tomarse desde la base de
datos). Elegir apropiadamente los temas para conformar el objeto ‘producto’ (nombre, precio y
foto).

## Consigna 2:

Ahora, vamos areformar el formato de los mensajesy la forma de comunicación del chat
(centro de mensajes).
El nuevo formato de mensaje será:

{

    author: {

    id: 'mail del usuario' ,

    nombre: 'nombre del usuario' ,

    apellido: 'apellido del usuario' ,

    edad: 'edad del usuario' ,

    alias: 'alias del usuario' ,

    avatar: 'url avatar (foto, logo) del usuario'

    },

    text: 'mensaje del usuario'

}

# Aspectos a incluir en el entregable:

1.Modificar la persistencia de los mensajes para que utilicen un contenedor que permita guardar objetos anidados (archivos, mongodb, firebase).

2.El mensaje se envía del frontend hacia el backend, el cual lo almacenará en la base de datos elegida. Luego cuando el cliente se conecte o envie un mensaje, recibirá unarray de mensajesa representar en su vista.
3.El array que se devuelve debe estarnormalizado con normalizr, conteniendo una entidad de autores. Considerar que el array tiene sus autores con su correspondiente id (mail del usuario), pero necesita incluir para el proceso de normalización unid para todo el arrayen su conjunto (podemos asignarle nosotros un valor fijo).
Ejemplo: 

{ id: ‘mensajes’, mensajes: [ ] }


4.El frontend debería poseer elmismo esquema de normalizaciónque el backend, para que este pueda desnormalizar y presentar la información adecuada en la vista.

5.Considerar que se puedecambiar el nombre del idque usa normalizr, agregando un tercer parametro a la función schema.Entity, por ejemplo:
constschemaAuthor=newschema.Entity('author',{...},{idAttribute:'email'});
En este schema cambia el nombre del id con que se normaliza el nombre de los autores a
'email'. Más info en la web oficial.


6.Presentar en el frontend (a modo de test) elporcentaje de compresiónde los mensajes
recibidos. Puede ser en el título del centro de mensajes.

## Nota:

Incluir en el frontend el script de normalizr de la siguiente cdn:
https://cdn.jsdelivr.net/npm/normalizr@3.6.1/dist/normalizr.browser.min.js
Así podremos utilizar los mismos métodos de normalizr que en el backend. Por ejemplo: newnormalizr.schema.Entity , normalizr.denormalize(...,...,...)
