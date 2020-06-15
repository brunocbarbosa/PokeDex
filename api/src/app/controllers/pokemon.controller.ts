import { Request, Response } from 'express';
import axios from 'axios';
import url from '../../config/environment';

// Get datas, all datas limited by number of results or by name and number
class PokemonController {
    async getAll(req: Request, res: Response) {
        try {
            const { data } = await axios.get(`${url}/pokemon/?limit=10`);

            return res.status(200).send(data);
        } catch (error) {
            console.error(error);
        }
    }

    async getOne(req: Request, res: Response){
        try {
            const { data } = await axios.get(`${url}/pokemon/${req.params.data}`);
        
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
        }
    }
}

export default PokemonController;