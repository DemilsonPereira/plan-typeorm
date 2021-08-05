import { getCustomRepository } from "typeorm";
import { LojasRepositories } from "../../repositories/LojasRepositories";

class DeleteLojaService {

  async execute(id: string) {
    const lojasRepositories = getCustomRepository(LojasRepositories);

    if (!id) {
      throw new Error("Incorrect ID!");
    }

    const notIdLoja = await lojasRepositories.findOne({
      id,
    });

    if (!notIdLoja) {
      throw new Error("ID doesn't exist!");
    }

    const deleteLojaId = await lojasRepositories.delete(id)

    return deleteLojaId;
  }
}

export {
  DeleteLojaService
}
