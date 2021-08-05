import { getCustomRepository } from "typeorm";
import { PlanosRepositories } from "../../repositories/PlanosRepositories";

class DeletePlanoService {
  async execute(id: string) {
    const planosRepositories = getCustomRepository(PlanosRepositories);

    if (!id) {
      throw new Error("Incorrect ID!");
    }

    const notIdPlano = await planosRepositories.findOne({
      id,
    });

    if (!notIdPlano) {
      throw new Error("ID doesn't exist!");
    }

    const deletePlanoId = await planosRepositories.delete(id)

    return deletePlanoId;

  }
}

export {
  DeletePlanoService
}
