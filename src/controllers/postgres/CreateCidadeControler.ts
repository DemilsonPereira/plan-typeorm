import { Request, Response } from 'express'
import { CreateCidadeService } from '../../services/postgres/CreateCidadeService'

class CreateCidadeControler {
  async handle(request: Request, response: Response) {
    const { cidade, estado } = request.body;

    const createCidadeService = new CreateCidadeService();

    const cidades = await createCidadeService.execute({
      cidade,
      estado
    });

    return response.json(cidades);

  }
}

export {
  CreateCidadeControler
}
