<%-- 
    Document   : rompecabezas
    Created on : 27 ago 2025, 07:53:42
    Author     : Roberto
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../Styles/rompecabezas.css"/>
        <link rel="icon" href="../Images/icono.png"/>
        <title>Rompecabezas 4x4</title>
    </head>

    <body>
        <div class="div-juego">
            <div class="encabezado">
                <h1 class="titulo">Rompecabezas 4x4</h1>
                <p class="p-juego">Haz clic en un número adyacente al espacio vacío para moverlo</p>
            </div>

            <div class="contenido">
                <div class="espacio-juego">
                    <div class="img-ref">
                        <img src="../Images/pollocontenis.jpg" alt="Imagen de Referencia"/>
                    </div>
                </div>

                <div class="espacio-juego">
                    <div class="div-tempo">
                        <h2 id="tiempo"></h2>
                    </div>

                    <div class="puzzle-grid">
                        <div class="rompecabezas">
                           <div id="puzzle" class="puzzle"></div> 
                        </div>                     
                    </div>
                </div>   
            </div>
            <div class="controls">
                <button class="btn btn-reset" onclick="reiniciar()">Reiniciar</button>
                <button class="btn btn-hint">
                    <a href="../index.jsp" class="a-hint">Menu</a>
                </button>
            </div>
        </div>
        <script src="../js/script.js"></script>
    </body>
</html>
