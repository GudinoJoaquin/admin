# Cómo usar

#### Inicio de sesión

Para iniciar sesión deberá ingresar correctamente el usuario y la contraseña. Una vez que ambos sean correctos, verá un nuevo formulario que le solicitará un código de verificación. Cada código de verificación es un número de 6 dígitos generado de forma aleatoria que llegará al correo correo@gmail.com cada vez que el usuario y la contraseña ingresados sean los correctos. Este código tiene la intención de agregar un proceso que requiera la intervención de una persona al iniciar sesión para evitar ataques de fuerza bruta, y a su vez servirá como advertencia si alguien logra obtener la información de inicio de sesión.

#### Página principal

En la página principal se podrán ver los mismos anuncios que ven los usuarios en https://eest5mdp.edu.ar/#/anuncios, con la diferencia de que se agregan los botones de [`Crear anuncio`], [`Configurar`], [`Modificar`] y [`Eliminar`].

#### Crear

En la sección para crear un anuncio verá un formulario con 4 campos. Dos de texto para asignar un título y un mensaje (Por defecto el título es "Título" y el mensaje "Mensaje"). El siguiente será para agregar una imagen, que por defecto será una imagen de la escuela, y el último será para agregar un enlace al que los usuarios podrán acceder para ver más información, representado a través del botón [`Saber más`].

#### Modificar

En la sección de modificar verá un formulario similar al que se encuentra en la sección [`Crear anuncio`]. Aquí podrá modificar todos los atributos de un anuncio, a excepción de la fecha. Únicamente deberá reemplazar el contenido del campo deseado por el nuevo contenido. En caso de que no se quiera modificar un campo, el anuncio mantendrá su atributo sin modificar.

#### Configurar

En el apartado de la configuración podrá cambiar tanto el usuario como la contraseña con la que los administradores acceden a la página. Deberá reemplazarlo con el nuevo usuario o contraseña deseado. **Tenga en cuenta que una vez cambie las credenciales, no deberá volver a iniciar sesión en ese momento, pero deberá hacerlo una vez que esta se termine. Y deberá utilizar las nuevas credenciales (Cada sesión permanecerá abierta por 3 horas).**

# Documentación

##### Tecnologías utilizadas

- [ReactJS](https://es.react.dev/learn)
- [TailwindCSS](https://tailwindcss.com/docs/installation)

#### Instalación paquetes

```bash
npm install
```

#### Iniciar localhost

```bash
npm run dev
```

Esto iniciará en [localhost:5173](http://localhost:5173)

# API

La API la podrá encontrar en https://github.com/GudinoJoaquin/server. Allí encontrará el código y la documentación de la misma.

Hecho por:

- Facundo Cientofante 6°4
- Gudiño Joaquin 6°4

En colaboración con:

- Vicedirector Hector Scaglione
- Jefe de Área Diego Alvarez
- Profesora Carolina Schnyder
