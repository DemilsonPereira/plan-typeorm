import { getCustomRepository } from "typeorm";
import { ImagesRepositories } from "../../repositories/ImagesRepositories";

class UploadImageService {
  async execute({ name, path, loja_id, url }) {
    const imagesRepositories = getCustomRepository(ImagesRepositories);

    const imageAlreayExists = await imagesRepositories.findOne({
      name,
    });

    if (imageAlreayExists) {
      throw new Error("Image already exists");
    }

    const images = imagesRepositories.create({
      name,
      path,
      url,
      loja_id
    })

    await imagesRepositories.save(images);

    return images;

  }
}

export {
  UploadImageService
}
