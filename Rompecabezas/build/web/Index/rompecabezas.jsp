<%-- 
    Document   : rompecabezas
    Created on : 27 ago 2025, 07:53:42
    Author     : Roberto
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../Styles/rompecabezas.css"/>
        <link rel="icon" href="../Images/icono.png"/>
        <title>Juego de Rompecabezas</title>
    </head>

    <body>
        <h2>Rompecabezas 4x4</h2>
        <p>Haz clic en un numero adyacente al espacio vacio para moverlo</p>
        <div class="container">

            <div class="container1">
                <img src="../Images/pollocontenis.jpg" alt="alt"/>
            </div>
            <h2 id="tiempo"></h2>
            <div id="puzzle" class="puzzle"></div>                
            <p id="mensaje"></p>
            <button onclick="reiniciar()">Reiniciar</button>
        </div>
        <script src="../js/script.js"></script>       
    </body>
</html>
