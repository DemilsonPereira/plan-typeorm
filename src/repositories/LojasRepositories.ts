import { EntityRepository, Repository } from "typeorm";
import { Loja } from "../entities/Loja";

@EntityRepository(Loja)
class LojasRepositories extends Repository<Loja>{

}

export {
  LojasRepositories
}
