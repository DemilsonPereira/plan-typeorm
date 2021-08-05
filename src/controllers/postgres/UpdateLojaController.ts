import { Request, Response } from 'express';
import { UpdateLojaService } from "../../services/postgres/UpdateLojaService";

class UpdateLojaController {
  async handle(request: Request, response: Response) {
    const { id, cep, logradouro, numero, complemento, bairro, url_maps } = request.body;

    const updateLojaService = new UpdateLojaService();

    const updateLojaId = await updateLojaService.execute(id, cep, logradouro, numero, complemento, bairro, url_maps);

    return response.status(200).send();
  }
}

export {
  UpdateLojaController
}
