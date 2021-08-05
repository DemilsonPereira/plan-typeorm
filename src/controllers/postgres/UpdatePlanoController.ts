import { Request, Response } from 'express';
import { UpdatePlanoService } from '../../services/postgres/UpdatePlanoService';

class UpdatePlanoController {
  async handle(request: Request, response: Response) {
    const { id, tipo, plano, deezer, looke, feature1, feature2, feature3, feature4, feature5, feature6, feature7, feature8, feature9, feature10 } = request.body;

    const updatePlanoService = new UpdatePlanoService();

    const updatePlanoId = await updatePlanoService.execute(id, tipo, plano, deezer, looke, feature1, feature2, feature3, feature4, feature5, feature6, feature7, feature8, feature9, feature10)

    return response.status(200).send()
  }
}

export {
  UpdatePlanoController
}
