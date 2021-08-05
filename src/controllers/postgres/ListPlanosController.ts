import { Request, Response } from 'express'
import { ListPlanosService } from '../../services/postgres/ListPlanosService'

class ListPlanosController {
  async handle(request: Request, response: Response) {
    const { tipo } = request.body;

    const listPlanosService = new ListPlanosService();

    const planosTipo = await listPlanosService.execute(tipo);

    return response.json(planosTipo)
  }
}

export {
  ListPlanosController
}
