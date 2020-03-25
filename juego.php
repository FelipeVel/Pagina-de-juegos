<?php
	$v1=$_GET['id'];
	$usuario = "root";
	$contrasena = "";  // en mi caso tengo contraseña pero en cada caso introducir aqui.
	$servidor = "localhost";
	$basededatos = "juegos";

	$conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");

		
	$db = mysqli_select_db( $conexion, $basededatos ) or die ( "No se ha podido conectar a la base de datos" );

	$consulta = "SELECT Link FROM `juego` WHERE Titulo = '".$v1."'";

	$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha salido mal en la consulta a la base de datos");

	$row=mysqli_fetch_array($resultado);
	$r=$row['Link'];

	$consulta = "SELECT Categoria FROM `juego` WHERE Titulo = '".$v1."'";
	
	$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha salido mal en la consulta a la base de datos");
	
	$row=mysqli_fetch_array($resultado);
	$c=$row['Categoria'];

	
	$consulta_imagen = "SELECT Imagen FROM `juego` WHERE Categoria ='".$c."'";
	
	$resultado_imagen = mysqli_query($conexion,$consulta_imagen)or die ( "Algo ha salido mal en la consulta a la base de datos");
	
	$rowI = mysqli_fetch_array($resultado_imagen);	
	
	$i=$rowI['Imagen'];

	$consulta = "SELECT Titulo FROM `juego` WHERE Categoria ='".$c."'";
	
	$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha salido mal en la consulta a la base de datos");
	
	$row=mysqli_fetch_array($resultado);
	$t=$row['Titulo'];

// Genero: ProgramasProgramacion.com
echo "<!DOCTYPE html>\n";
echo "\n";
echo "<html lang=\"es-co\" xmlns=\"http://www.w3.org/1999/xhtml\">\n";
echo "<head>\n";
echo "    <meta charset=\"utf-8\" />\n";
echo "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n";
echo "    <title>Juego:".$v1."</title>\n";
echo "    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/bootstrap.min.css\">\n";
echo "	  <script type=\"text/javascript\" src=\"$r\"></script>\n";
echo "</head>\n";
echo "<body background=\"Capturas/fondo.png\">\n";
echo "    <div class=\"container\" style=\"background-color: white;\">\n";
echo "		  <h1>";
echo $v1;
echo "		  </h1>\n";
echo "		  <a href=\"index.php\" class=\"btn btn-primary\">Inicio</a>\n";
echo "        <div class=\"row\" style=\"height:100px\"></div>\n";
echo "        <div class=\"row\">\n";
echo "            <div class=\"col-8\" id=\"bloque_juego\">\n";
echo "                <canvas id=\"miCanvas\" width=\"580\" height=\"420\" style=\"border:2px solid #000000;background-color: black;\">Su navegador no es compatible</canvas>\n";
echo "            </div>\n";
echo "            <div class=\"col-4\" style=\"background-color: white;\">\n";
echo "                <div class=\"row\">\n";
echo "                    <h1>Relacionados: $c</h1>\n";
echo "                </div>\n";
echo "                <div class=\"row\" style=\"background-color: white;\">\n";
echo "                    <div class=\"card\" style=\"width: 18rem;\">\n";
echo "                        <img src=\"".$i."\" class=\"card-img-top\" alt=\"...\" width=\"100\" height=\"100\">\n";
echo "                        <div class=\"card-body\">\n";
echo "                            <h5 class=\"card-title\">".$t."</h5>\n";
echo "                            <a href=\"juego.php?id=".$t."\" class=\"btn btn-primary\" id=\"".$t."\" onclick=\"guardar('".$t."')\">Jugar ".$t."</a>\n";
echo "                        </div>\n";
echo "                    </div>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "        </div>\n";
echo "    </div>\n";
echo "\n";
echo "    <script src=\"js/jquery-3.3.1.slim.min.js\"></script>\n";
echo "    <script src=\"js/popper.min.js\"></script>\n";
echo "    <script src=\"js/bootstrap.min.js\"></script>\n";
echo "	  <script type=\"text/javascript\" src=\"$r\"></script>\n";
echo "</body>\n";
echo "</html>\n";

?>