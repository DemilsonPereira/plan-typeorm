import { Request, Response } from 'express';
import { CreateLojaService } from '../../services/postgres/CreateLojaService';


class CreateLojaController {
  async handle(request: Request, response: Response) {
    const {
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      url_maps,
      cidade_id
    } = request.body;

    const createLojaService = new CreateLojaService();

    const lojas = await createLojaService.execute({
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      url_maps,
      cidade_id
    });

    return response.json(lojas);
  }
}

export {
  CreateLojaController
}
