import {pool} from '../db.js';

export const listarCategorias = async (req,res) => {
    const [result] = await pool.query('SELECT * FROM categorias');
    res.json(result);
}