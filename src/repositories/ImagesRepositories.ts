import { EntityRepository, Repository } from "typeorm";
import { Image } from "../entities/Image";

@EntityRepository(Image)
class ImagesRepositories extends Repository<Image>{

}

export {
  ImagesRepositories
}
