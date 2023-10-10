export class ControladorReserva{

    constructor(){}
    registrarReserva(peticion,respuesta){ try{
        //1- esculcar los datos que quieren usar para el registro
        let datosHabitacionReservar = peticion.body
        //2-validar los datos
        //3- Intentar guardar los datos
        //4-Responder
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de guardado",
            "datos" : "aca van los datos que se guardaron"
        })

    
    }catch(error){ respuesta.status(400).json({
        "mensaje" : "fallamos en la operacion de guardado" + error
    })}}
    buscarReservas(peticion,respuesta){ try{
        
        //1-intentar buscar los datos en BD
        //2-Responder 
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de busqueda",
            "datos" : "aca van los datos que se buscaron"
        })

        }catch(error){respuesta.status(400).json({
            "mensaje" : "fallamos en la operacion de busqueda" + error
        })}}
    buscarReserva(peticion,respuesta){  try{

        //1- Esculcar los parametros de la peticion 
        let idHabitacionBuscar = peticion.params.id
        //2- validar el dato que dejo
        //3- Intento buscar el dato en BD
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de busqueda",
            "datos" : "aca van los datos que se buscaron"
        })

    }catch(error){respuesta.status(400).json({
        "mensaje" : "fallamos en la operacion de busqueda" + error
    })}}
    modificarReserva(peticion,respuesta){  try{
        //1- traigo el id a editar de la peticion
        let idReservaModificar = peticion.params.id
        let datosHabitacionReservaModificar = peticion.body
        //validar los datos
        //intento buscar y modificar en BD
        //4-responder
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de edicion",
            "datos" : "aca van los datos que se editaron"
        })
    }catch(error){respuesta.status(400).json({
        "mensaje" : "fallamos en la operacion de edicion" + error
    })}}
    borrarReserva(peticion,respuesta){ try{
        let idReservaBorrar = peticion.params.id
        //validar
        //intento borrar la habitacion 
        //Responder
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de borrado",
        })

    }catch(error){respuesta.status(400).json({
        "mensaje" : "fallamos en la operacion de edicion" + error
    })}}
    

}