import { Request, Response } from 'express';
import { ListLojasService } from '../../services/postgres/ListLojasService';


class ListLojasController {
  async handle(request: Request, response: Response){
    const listLojasService = new ListLojasService();

    const listLojas = await listLojasService.execute();

    return response.json(listLojas);
  }
}

export {
  ListLojasController
}
