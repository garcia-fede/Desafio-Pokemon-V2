# Instrucciones de uso

Requisitos previos:

- sqlite3 - Versión utilizada: v3.46.1
- node - Versión utilizada: v18.17.1
- nestjs - v10.0.0

Pasos a seguir para iniciar el proyecto correctamente:

#Backend

- Abrir un CMD en la raiz del proyecto
- Ingresar "cd backend"

- Ingresar "npm install" y esperar a que las librerias del proyecto (TypeORM, NestJS) se descarguen.

- En caso de necesitar hacer una nueva migración dentro del proyecto:
"npx typeorm migration:generate -n 'Nombre de micracion' "

- Para ejecutar la migración existente o la nueva migración:
"npm run migration:run  "
  
#En package.json se especificaron shortcuts para utilizar comandos de #maneras mas eficientes

- Para iniciar el servidor ingresar el comando:
"npm run start:dev"

#Frontend

- Abrir un CMD en la raiz del proyecto

- Ingresar "cd frontend"

- Ingresar "npm install" y esperar a que las librerias del proyecto (React, Axios, Material UI) se descarguen

- Para ejecutar la aplicación ingresar el comando:
"npm run start"