import { getCustomRepository } from "typeorm";
import { LojasRepositories } from "../../repositories/LojasRepositories";

class ListLojasByCidadeService {
  async execute(cidade_id: string) {
    const lojasRepositories = getCustomRepository(LojasRepositories);

    const LojaCidade = await lojasRepositories.findOne({
      where: {
        cidade_id: cidade_id,
      },
      relations: ["cidade", "images"],
    });

    return LojaCidade;
  }
}

export { ListLojasByCidadeService };
