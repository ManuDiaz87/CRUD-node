import app from './app.js';
import {PUERTO} from './config.js'

app.listen(PUERTO);
console.log(`Servidor corriendo desde el puerto ${PUERTO}`);