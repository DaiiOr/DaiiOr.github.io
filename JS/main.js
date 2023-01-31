

function datosCurriculum(){

    document.getElementById('info-personal').addEventListener('click', function() {
        document.getElementById("nombre").innerHTML = "Clara Stuart";
    });

    document.getElementById('fecha-nacimiento').addEventListener('click', function() {
        document.getElementById("nacimiento").innerHTML = "14/04/1985";
    });

    document.getElementById('direccion').addEventListener('click', function() {
        document.getElementById("dire").innerHTML = "Pujol 1586, Tandil, Buenos Aires, Argentina";
    });

    document.getElementById('telefono').addEventListener('click', function() {
        document.getElementById("tel").innerHTML = `
        <li class="lista"> Tel&eacutefono: 249 8899447 </li>
        <li class="email"> e-mail: clarastuart@livemail.com </li>
        `;   
    });

    document.getElementById('estudios').addEventListener('click', function() {
        document.getElementById("graduacion").innerHTML = ` 
        <li class="estilo-lista"> TECNICO UNIVERSITARIO EN DESARROLLO DE APLICACIONES INFORMATICAS </li>  
        <li> 2021 - Actualidad </li> 
        <li> Universidad del Centro de la Provincia de Buenos Aires </li> 
        <li> Estudio en curso </li> `;
    });

    document.getElementById('experiencia').addEventListener('click', function() {
        document.getElementById("trabajo").innerHTML = `
        <li class="estilo-lista"> GERENTE DE TIENDA COMERCIAL MONTBLANC. </li> 
        <li> Desde 01/03/2020 a 23/11/2020. VERACRUZ, MEXICO. </li>
    
        <li class="estilo-lista"> ASOCIADO DE VENTAS RETAIL A BORDO DE CRUCEROS. </li> 
        <li> Desde diciembre de 2015 a Julio de 2019. </li>

        <li class="estilo-lista"> REPRESENTANTE DE ATENCION AL CLIENTE, ALLUS GLOBAL BPO CENTER. </li>
        <li> Desde mayo de 2011 a septiembre de 2015. CORDOBA, ARGENTINA </li>
        `;
    });

    document.getElementById('social-media').addEventListener('click', function() {
        document.getElementById("redes").innerHTML = `
        <i class="fa-brands fa-linkedin" id="social-media"> Clara_Stuart </i>
        `
    });
}
datosCurriculum();

document.getElementById('eliminar').addEventListener('click', function(e){
    document.getElementById('informacion').innerHTML = "";
    
});
