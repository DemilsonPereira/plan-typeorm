import { Request, Response } from 'express';
import { ListCidadesService } from '../../services/postgres/ListCidadesService';


class ListCidadesController {
  async handle(request: Request, response: Response){
    const listCidadesService = new ListCidadesService();

    const cidades = await listCidadesService.execute();

    return response.json(cidades);
  }
}

export {
  ListCidadesController
}
