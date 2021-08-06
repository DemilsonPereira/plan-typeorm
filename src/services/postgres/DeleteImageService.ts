import { getCustomRepository } from 'typeorm';
import { ImagesRepositories } from '../../repositories/ImagesRepositories';

class DeleteImageService {
  async execute(id: string) {
    const imagesRepositories = getCustomRepository(ImagesRepositories);

    if (!ImagesRepositories) {
      throw new Error('Incorrect ID!');
    }

    const notIdImage = await imagesRepositories.findOne({ id });

    if (!notIdImage) {
      throw new Error("ID doesn't exists!");
    }

    const deleteImageId = await imagesRepositories.delete(id);

    return deleteImageId;
    
  }
}

export {
  DeleteImageService
}
