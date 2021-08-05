import { EntityRepository, Repository } from "typeorm";
import { Cidade } from "../entities/Cidade";

@EntityRepository(Cidade)
class CidadesRepositories extends Repository<Cidade>{

}

export {
  CidadesRepositories
}
