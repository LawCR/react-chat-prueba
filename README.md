# Aplicación de Chat 

Aplicación de chat usando solamente React con TypeScript, Redux y Local Storage para el control de datos y styled components para crear el diseño de las interfaces.

## Features

![image](https://media.discordapp.net/attachments/839620709517230081/964640407768170577/unknown.png?width=1215&height=676)

### Navbar

-En modo de Escritorio contiene el nombre de la Aplicación y el usuario actual.\
-Al darle click en el usuario se abrira un modal para actualizarle el nombre de usuario.\
-En modo Mobile contiene los menus para mostrar la lista de usuarios y grupos.

### Lista de Usuario

-Lista con todos los usuarios existentes.\
-Se creara un usuario nuevo cada que se abra una nueva pestaña y se insertara en la lista.\
-Seleccionar un usuario para crear o abrir el chat de ese grupo.\
-Un search para buscar un usuario por nombre dandole enter o click a la lupa.\
-Para que se muestren todos los usuarios nuevamente buscar con el input vacio.

### Lista de Grupos

-Lista con todos los grupos existentes por categoria (4 categorias).\
-Seleccionar un grupo para crear o abrir el chat de ese grupo.\
-Un search para buscar un grupo por nombre.\
-Un boton icon (+) para abrir el formulario para crear nuevo grupo(nombre y categoria).\
-Boton para eliminar grupo.\
-Para que se muestren todos los grupos nuevamente buscar con el input vacio.

### Categorias

-Hay 4 categorias por default.\
-Al seleccionar una categoria mostrara los grupos que pertenecen a esta.

### Chat

-El chat se mostrara cuando selecciones un grupo o usuario.\
-Si no se selecciona un chat no permitirá escribir.\
-Los mensajes del chat son almacenados en el localstorage asi que son persistentes.\
-Se puede eliminar mensajes del chat seleccionado.

# Responsive

-Se puede acceder a toda la funcionalidad en modo responsive.

![image](https://cdn.discordapp.com/attachments/839620709517230081/964631983248535612/unknown.png)

