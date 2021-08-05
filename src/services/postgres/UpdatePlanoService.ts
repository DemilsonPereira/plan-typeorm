import { getConnection, getCustomRepository } from "typeorm";
import { Plano } from "../../entities/Plano";
import { PlanosRepositories } from "../../repositories/PlanosRepositories";

class UpdatePlanoService {
  async execute(
    id: string,
    tipo: string,
    plano: string,
    deezer: boolean,
    looke: boolean,
    feature1: string,
    feature2: string,
    feature3: string,
    feature4: string,
    feature5: string,
    feature6: string,
    feature7: string,
    feature8: string,
    feature9: string,
    feature10: string,
  ) {

    const planosRepositories = getCustomRepository(PlanosRepositories);

    if (!id) {
      throw new Error("Incorrect ID!");
    }

    const notIdPlano = await planosRepositories.findOne({
      id
    });

    if (!notIdPlano) {
      throw new Error("ID doesn't exist!");
    }

    const updatePlanoId = await getConnection()
      .createQueryBuilder()
      .update(Plano)
      .set({
        id,
        tipo,
        plano,
        deezer,
        looke,
        feature1,
        feature2,
        feature3,
        feature4,
        feature5,
        feature6,
        feature7,
        feature8,
        feature9,
        feature10,
      })
      .where({ id: id })
      .execute();

    return updatePlanoId;

  }
}

export {
  UpdatePlanoService
}
