import { v4 as uuidv4 } from 'uuid';
let usuarios = [];

export const crearUsuario = (req, res) => {
    const usuario = req.body;
    usuarios.push({...usuario, id: uuidv4()})
    res.send(`Usuario ${usuario.usuario} agregado correctamente.`)
};

export const obtenerUsuario = (req, res) => {
    const {id} = req.params;
    const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);
    res.send(usuarioEncontrado);
};

export const obtenerUsuarios = (req, res) => {
    res.send(usuarios);
};

export const eliminarUsuario = (req,res) => {
    const {id} = req.params;
    usuarios = usuarios.filter( (usuario) => usuario.id !== id )
    res.send(`Usuario con ID ${id} eliminado correctamente.`)
};

export const modificarUsuario = (req,res) =>{
    const {id} = req.params;
    const {usuario, acceso} = req.body;
    const usuarioEncontrado = usuarios.find( (u) => u.id === id); 

    if(usuario) usuarioEncontrado.usuario = usuario;
    if(acceso) usuarioEncontrado.acceso = acceso;

    res.send(`Usuario ${usuarioEncontrado.usuario} modificado correctamente.`)
};