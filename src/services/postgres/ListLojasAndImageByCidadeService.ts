import { getCustomRepository } from "typeorm";
import { ImagesRepositories } from "../../repositories/ImagesRepositories";
import { LojasRepositories } from "../../repositories/LojasRepositories";


class ListLojasByCidadeService{
  async execute(cidade_id: string, loja_id: string){
    const lojasRepositories = getCustomRepository(LojasRepositories);
    const imagesRepositories = getCustomRepository(ImagesRepositories);

    const LojaCidade = await lojasRepositories.find({
      where: {
        cidade_id: cidade_id
      },
      relations: [
        "cidade_id",
      ],
    });

    const imagemLojas = await imagesRepositories.find({
      where: {
        loja_id: loja_id
      },
    });


    return {LojaCidade, imagemLojas};

  }
}

export {
  ListLojasByCidadeService
}
