import { Request, Response } from 'express';
import { DeleteImageService } from '../../services/postgres/DeleteImageService';

class DeleteImageController {
  async handle(request: Request, response: Response) {
    const { id: idImage } = request.body;

    const deleteImageService = new DeleteImageService();

    const deleteImageId = deleteImageService.execute(idImage);

    return response.status(200).send();
  }
}

export {
  DeleteImageController
}
