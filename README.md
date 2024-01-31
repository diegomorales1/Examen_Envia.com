**-- Consideraciones --**

- Es una pagina web creada a partir de una cuenta en mercado libre que contiene los productos, este ultimo integrado a envia.com
el cual otorga un token de acceso para poder conectarnos a la api de https://api.ecartapi.com/api/v2/products

- El punto anterior fue hecho de esa forma ya que tuve algunos inconvenientes con intentar acceder a los productos
mediante el token otorgado desde el examen. Para la solucion y no dejar vacio la respuesta, se creo una especie
de vendedor en mercado libre ofreciendo ciertos productos, asi mercado libre daria con el token de acceso

- Los paquetes utilizados fueron requests y flask, los dos instalados en la terminal mediante el codigo
pip install requests, pip install flask. Si es que la computadora donde correran el codigo no puede instalar bien los
paquetes mencionados, deberan crear un entorno virtual y ahi instalar los paquetes (lo que hice yo, por eso hay una carpeta venv que simula
un entorno virtual para tener todos los paquetes necesarios sin problema)

- El codigo fuente tiene una carpeta templates, que contiene el unico html en forma de index, que es la interfaz principal donde
se encuentran los productos

- Ademas de templates, podremos encuentrar una carpeta static, que contiene el estilo de la pagia en formato css, y la funcionalidad
de la pagina y botones en el apartado de js, en condigo Javascript

- En caso de que no lleguen a funcionar la instalacion, de todas formas el codigo fuente tiene una carpeta
llamada "venv" el cual es un entorno virtual de python con la intencion de guardar ahi los paquetes 
independiente de las versiones de pip, para que no hayan conflictos y que no se pueda ejecutar el programa


**-- Instrucciones de uso --**

1- Descargar codigo de github como zip.

2- Descomprimir en una carpeta a su gusto (preferible una carpeta aparte).

3- Abrir codigo python "Api_conecction.py".

3- Correr el codigo de Api_conecction.py mediante run del editor de texto, o escribir en consola 
"c:/Users/"usuario"/"nombre_de_carpeta_"/venv/Scripts/python.exe c:/Users/"usuario"/"nombre_de_carpeta_"/Api_connection.py"
Todo el codigo anterior entre comillas en la terminal. (ASEGURARSE DE ESTAR EN EL ENTORNO VIRTUAL PARA COLOCAR LO ANTERIOR EN LA CONSOLA)

4- El codigo en cuestion dara unos resultados en consola y una direccion IP, ejemplo: * Running on http://127.0.0.1:5000
colocar aquel "http://127.0.0.1:5000" en el navegador, asi se podra visualizar los resultados.

5- enjoy!!!
