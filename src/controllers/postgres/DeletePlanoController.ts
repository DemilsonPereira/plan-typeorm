import { Request, Response } from 'express';
import { DeletePlanoService } from '../../services/postgres/DeletePlanoService';

class DeletePlanoController {
  async handle(request: Request, response: Response) {
    const { id: idPlano } = request.body;

    const deletePlanoService = new DeletePlanoService();

    const deletePlanoId = await deletePlanoService.execute(idPlano);

    return response.status(200).send();
  }
}

export {
  DeletePlanoController
}
