# Proyecto 

Este proyecto tiene como objetivo proporcionar a los usuarios una herramienta eficiente para gestionar publicaciones y visualizar los comentarios mediante un desarrollo frontend de una pagina web. La aplicación permitirá a los usuarios explorar un listado de publicaciones, brindando acceso a información detallada sobre cada una. Para facilitar la búsqueda, los usuarios podrán aplicar un filtro de busqueda por palabra clave, asi mismo el usuario puede borrar y editar las publicaciones. Con esta herramienta, se simplifica la experiencia de visualizacion de publicaciones, brindando a los usuarios la capacidad de estar informados.

## Tecnologías Utilizadas

- Next.js: Marco de trabajo que permite crear aplicaciones de aplicaciones web de alto rendimiento a través de la renderización del lado del servidor.
- TypeScrip: Lenguaje de programación utilizado para desarrollar la Aplicacion web.
- Tailwind CSS:Framework CSS que permite aplicar estilos a los sitios web de una manera ágil y optimizada. 

## Desarrollo

### Estructura de Carpetas

La estructura de carpetas del proyecto se organiza de la siguiente manera:

src/│
├── app/
    ├── listado/
        ├── id/
            └── page.tsx
    ├── newpost/
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
    ├── components/
        ├── Carditem.tsx
        ├── Commentitem.tsx
        ├── CommentList.tsx
        ├── EditableField.tsx 
        ├── NavBar.tsx 
        └──
  ├── context/ 
        └──  PostContext.tsx      
  ├── hooks/
        ├── useLocalStorage.js
        ├── useOnScreen.js
        └── usePostStorage.js   
  ├── services/ 
        └── PostSservice.tsx      

## Como ejecutar:
Correr el comando:

npm run dev

Abrir [http://localhost:3000](http://localhost:3000) en algun navegador para ver el resultado.
