
import { Router } from "express";
const chatProducto = Router();
import { productosRandom } from '../utils/faker.js';

chatProducto.get('/productos-test', async (req, res) => {
    try {
        const productosFaker = productosRandom();
        res.json(productosFaker);
    } catch (err) {
        res.status(500).send(`No se puede recuperar los datos ${err}`);
    }
});

export default chatProducto;