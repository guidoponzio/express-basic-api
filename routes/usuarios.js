import express from 'express';
import {obtenerUsuarios, obtenerUsuario, crearUsuario, eliminarUsuario, modificarUsuario} from '../controllers/usuarios.js';

const router = express.Router();

// Todas las rutas en este archivo empiezan con /usuarios

router.get('/', obtenerUsuarios);

router.get('/:id', obtenerUsuario);

router.post('/', crearUsuario);

router.delete('/:id', eliminarUsuario);

router.patch('/:id', modificarUsuario);

export default router;