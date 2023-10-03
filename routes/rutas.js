import express from 'express'
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReservas.js'

// para poder llamar al controlador debo crear un objeto de la clase controladorHabitacion

// la clase en mayuscula, el obejto en minuscula
let controladorHabitacion = new ControladorHabitacion ();
let controladorReserva = new ControladorReserva ();

export let rutas=express.Router()

rutas.post('/api/habitaciones', controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion', controladorHabitacion.buscarHabitacionPorId)
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones',controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones', controladorHabitacion.modificarHabitacion)

rutas.post('/api/reservas', controladorReserva.registrarReserva)
rutas.get('/api/reserva', controladorReserva.buscarReserva)
rutas.get('/api/reservas',controladorReserva.buscarReservas)
rutas.put('/api/reservas',controladorReserva.modificarReserva)
rutas.delete('/api/reservas',controladorReserva.borrarReserva)