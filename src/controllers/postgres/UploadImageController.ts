import { query, Request, Response } from 'express';
import { UploadImageService } from '../../services/postgres/UploadImageService';
import * as multer from 'multer'

class UploadImageController {
  async handle(request: Request, response: Response) {
    const { originalname: name, filename: path, fieldname: url } = request.file;
    const { loja_id } = request.params;

    const uploadImageService = new UploadImageService();

    const lojaImage = await uploadImageService.execute({
      name,
      path,
      url: `${process.env.APP_URL}/files/${path}`,
      loja_id
    });

    return response.json(lojaImage);

  }

}

export {
  UploadImageController
}
