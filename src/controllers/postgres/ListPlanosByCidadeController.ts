import { Request, Response } from "express";
import { ListPlanosByCidadeService } from "../../services/postgres/ListPlanosByCidadeService";

class ListPlanosByCidadeController {
  async handle(request: Request, response: Response) {
    const { cidade_id, tipo } = request.body;

    const listPlanosByCidadeService = new ListPlanosByCidadeService();

    const planosCidade = await listPlanosByCidadeService.execute(cidade_id, tipo);

    return response.json(planosCidade);
  }
}

export {
  ListPlanosByCidadeController
}
