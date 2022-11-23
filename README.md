# Proyecto "Breeds of Dogs"

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Crear una DB usando Postgres.
- Aprender mejores prácticas.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

## El Proyecto

Cuenta con dos carpetas: `api` (para el backend) y `client` (para el frontend). 

En `api` crear un archivo llamado `.env` que tenga la siguiente forma:
```
DB_USER=usuariodepostgres 
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. 

Crear desde psql una base de datos llamada `dogs`.

El contenido de `client` fue creado usando: Create React App.

## Detalles del Proyecto

Crear una aplicación que permita ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api] (https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar razas.
  - Filtrarlas / Ordenarlas
  - Agregar nuevas razas.

__IMPORTANTE__: Para poder utilizar esta API externa es necesario crearse una cuenta para obtener una API Key.


### Únicos Endpoints/Flags que se utilizaron

  - GET https://api.thedogapi.com/v1/breeds
  - GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}


__Ruta principal__: 
- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Listado de razas de perros. Se muestra: 
  - Imagen
  - Nombre
  - Temperamento
  - Peso

- [ ] Botones/Opciones para filtrar por:
    - Temperamento 
    - Raza

- [ ] Botones/Opciones para ordenar tanto ascendente/descendentemente las razas de perro por:
    - Orden alfabético 
    - Peso
- [ ] Paginado para ir buscando y mostrando las razas, mostrando 8 por página.

__Ruta de detalle de raza de perro__: 
- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

__Ruta de creación de raza de perro__: 
- [ ] Formulario __controlado__ con los siguientes campos
  - Nombre
  - Altura (Diferenciar entre altura mínima y máxima)
  - Peso (Diferenciar entre peso mínimo y máximo)
  - Años de vida
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

#### Base de datos

El modelo de la base de datos tiene las siguientes entidades:

- [ ] 'Breed' con las siguientes propiedades:
  - ID *
  - Nombre *
  - Altura *
  - Peso *
  - Años de vida
- [ ] 'Temperament' con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es N a M. 


#### Backend

Servidor desarrollado en Node/Express con las siguientes rutas:

- [ ] __GET /dogs__:
  - Obtener un listado de las razas de perro
  
- [ ] __GET /dogs?name="..."__:
  - Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
- [ ] __GET /dogs/{idRaza}__:
  - Obtener el detalle de una raza de perro en particular
- [ ] __GET /temperament__:
  - Obtener todos los temperamentos posibles
- [ ] __POST /dog__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos