import express from 'express';
import usuariosRoutes from './routes/usuarios.js';

const app = express();
const PUERTO = 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/usuarios', usuariosRoutes);

app.listen(PUERTO, () => console.log(`Server corriendo en el puerto: http://localhost:${PUERTO}`));

app.get('/', (req, res) => {
    res.send("Home");
})