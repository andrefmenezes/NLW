import {Request,Response} from 'express';
import knex from '../database/connection';

class ItemsController{
    async index(req: Request , res: Response ) {
        const items = await knex('items').select('*');    
        
        const serializedItems = items.map(item =>{
            return{
                id: item.id,
                titulo: item.titulo,
                image_url:`http://localhost:3333/uploads/${item.image}`,
            };
        });
        
            return res.json(serializedItems);
            }
}

export default ItemsController;//exportando a classe