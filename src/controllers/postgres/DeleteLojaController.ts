import { Request, Response } from 'express';
import { DeleteLojaService } from '../../services/postgres/DeleteLojaService';


class DeleteLojaController {
  async handle(request: Request, response: Response) {
    const { id: idLoja } = request.body

    const deleteLojaService = new DeleteLojaService();

    const deleteLoja = await deleteLojaService.execute(idLoja);

    return response.status(200).send();

  }
}

export {
  DeleteLojaController
}

