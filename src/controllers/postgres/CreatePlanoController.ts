import { Request, Response } from 'express';
import { CreatePlanoService } from '../../services/postgres/CreatePlanoService';


class CreatePlanoController {
  async handle(request: Request, response: Response) {
    const {
      tipo,
      plano,
      deezer,
      looke,
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
      feature7,
      feature8,
      feature9,
      feature10,
      cidade_id } = request.body;

    const createPlanoService = new CreatePlanoService();

    const planos = await createPlanoService.execute({
      tipo,
      plano,
      deezer,
      looke,
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
      feature7,
      feature8,
      feature9,
      feature10,
      cidade_id
    });

    return response.json(planos);

  }
}

export {
  CreatePlanoController
}
