import { getCustomRepository } from "typeorm";
import { PlanosRepositories } from "../../repositories/PlanosRepositories";

// interface IPlanosRequest {
//   plano: string,
//   deezer: boolean;
//   looke: boolean;
//   feature1: string;
//   feature2: string;
//   feature3: string;
//   feature4: string;
//   feature5: string;
//   feature6: string;
//   feature7: string;
//   feature8: string;
//   feature9: string;
//   feature10: string;
//   cidade_id: string;
// }

class CreatePlanoService {
  async execute({
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
    cidade_id
  }) {

    const planosRepositories = getCustomRepository(PlanosRepositories)

    if (!plano) {
      throw new Error("Incorrect plan!");
    }

    const planoAlreayExists = await planosRepositories.findOne({
      tipo,
      plano,
      cidade_id
    });

    if (planoAlreayExists) {
      throw new Error("Plan already exists");
    }

    const planos = planosRepositories.create({
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
      cidade_id
    });

    await planosRepositories.save(planos);

    return planos;
  }
}

export {
  CreatePlanoService
}
