### Prueba-Tecnica Front end developer para Bancolombia 📋

Prueba tecnica desarrollada con ReactJS.

La aplicación se encuentra hospedada en github pages  ```https://stolzz0613.github.io/Prueba_tecnica_Bancolombia/```

### Instalación 🔧

Si se desea hacer el deploy en local se debe usar los comandos ```npm install``` y ```npm start``` 

## PUNTOS DE LA PRUEBA 🖇️

### Web responsive 📌

la aplicación se muestra y funciona correctamente en los distintos dispositivos

### Condiciones actuales 📌

Al inciar la aplicación buscará la posición del usuario y mostrara el clima, la temeperatura,
la temperatura baja y alta para la ubicación actual mostrando esta mima informacion para 
las 5 ciudades mas cercanas, en caso de no encontrar la posición o no tener los permisos para usarla 
se deberá ingresar el nombre o codigo postal de la ciudad que se quiere checkear.

### Desplegar mas información 📌

Al hacer click en en el botón ```More information``` se desplegará un modal con la velocidad del viento, humedad,
presión y hora de amanecer/puesta de sol correspondiente a la ciudad.

### Mostrar pronóstico 📌

Para listar los proyectos se debe realizar una busqueda de todos aquellos pertenecientes al usuario logueado, igualmente
con las tareas. Además, las acciones sobre proyectos y tareas solo pueden ser realizadas por el usuario que las creo.

### Pronóstico de los próximos 5 días 📌

En la parte inferior del modal ```More information``` encontraremos un grafico con la predicción con de los proximos 5 dias,
con lineas correspondientes para la temperatura baja, la alta y el promedio, este grafico se puede descargar haciendo uso del
menú ubicado en la esquina superior derecha.

### Herramienta gráfico 📌

Al pasar el cursor o hacer click en alguno de los puntos se mostrará un tooltip con el dia de la semana, la descripción del tiempo,
la temperatura alta y la baja. Este tooltip fue diseñado por mi, ya que el que viene por defecto no muestra la información requerida y 
no se permite editar.

### Busqueda 📌

Se puede hacer uso de la barra de busqueda para obtener información de otra ubicación, se debe ingresar el nombre o codigo postal.

### Conexión a Google Analytics y Google tag manager 📌

La aplicación hace el envio del datalayer cada vez que se realiza una busqueda con resultados.

### NOTAS Y RECOMENDACIONES 📌

- A la hora de realizar la busqueda se recomienda ingresar ciudad y pais para encontrar resultados mas precisos.
- Las apikeys y otras variables se encuentran en el archivo .env, esto con el fin de que sea usable y/o en caso de que se deseen cambiar para pruebas.
- En la carpeta ```services```se encontraran los llamados a las api que se usan para este proyecto.
- Se recomienda usar chrome o firefox ya que safari bloquea por defecto la obtención de la ubicación.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

