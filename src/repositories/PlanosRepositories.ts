import { EntityRepository, Repository } from "typeorm";
import { Plano } from "../entities/Plano";

@EntityRepository(Plano)
class PlanosRepositories extends Repository<Plano>{

}

export {
  PlanosRepositories
}
