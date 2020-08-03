let jConexion = {

       host:"localhost", 
       user:"root", 
       password:"lolap38lola", 
       database:"basedistribuidos"

}


var con = mysql.createConnection(jConexion ); 


con.connect(function(error){                                                                                                 
            try{ 
              
               if(error){ 

                   console.log("Error al establecer la conexión a la BD -- " + error); 

               
                   console.log("Conexión exitosa"); 

               } 
           }
           catch(x){ 
               console.log("Contacto.agregarUsuario.connect --Error-- " + x); 
           } 
});