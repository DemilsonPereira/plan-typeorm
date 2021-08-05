import { Request, Response } from 'express';
import { ListLojasByCidadeService } from '../../services/postgres/ListLojasAndImageByCidadeService';

class ListLojasByCidadeController {
  async handle(request: Request, response: Response) {

    const { cidade_id } = request.body;

    const listLojasByCidadeService = new ListLojasByCidadeService();

    const lojasCidade = await listLojasByCidadeService.execute(cidade_id);

    return response.json(lojasCidade);
  }
}

export {
  ListLojasByCidadeController
}
