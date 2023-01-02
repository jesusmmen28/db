# APP para compartir enlaces

API que permite a los usuarios registrarse y compartir enlaces web que
consideren interesantes. Otros usuarios pueden votar si les gustan los enlaces que comparten.

## Entidades

- anonymousUsers:
    - id
    - name
    - email
    - password

- registredUsers:
    - id
    - name
    - email 
    - password
    - biography
    - photo
    - createdLink

- link:
    - id
    - user
    - text o url
    - createdLinkç

- linkVotes
    - id
    - entry 
    - vote
    - date
    - user

## Endpoints
- **POST /anonymousUsers**  Registro de usuario anónimo
- **GET /anonymousUsers/:id** Devuelve información de usuario anónimo
- **POST /login**  Login de usuario anónimo (devuelve token)
- **GET /users/:id** Sólo para usuarios registrados
- **PUT /users/:id** Editar datos de usuario: email, name, biografía, foto
- **POST /**  Permite crear un link (necesita cabecera con token) 
- **GET /**  Lista todos los links
- **GET /link/:id**  Deveuelve un link
- **DELETE /link/:id**  Borra un link sólo si eres quien lo creó 
- **PUT /link/:id**  Permite modificar un link sólo si eres quien lo creó 
- **POST /entries/:id/votes** Votar una entrada
- **GET /entries/:id/votes** Ver votos de una entrada



