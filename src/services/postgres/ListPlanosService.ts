import { getCustomRepository } from 'typeorm';
import { PlanosRepositories } from '../../repositories/PlanosRepositories';
import { classToPlain } from 'class-transformer';

class ListPlanosService {
  async execute(tipo: string) {
    const planosRepositories = getCustomRepository(PlanosRepositories);

    const planoRes = await planosRepositories.find({
      where: {
        tipo: tipo = "Residencial",
      }
    });

    const planoEmp = await planosRepositories.find({
      where: {
        tipo: tipo = "Empresarial",
      }
    });

    return classToPlain({ Residencial: planoRes, Empresarial: planoEmp });
  }
}

export {
  ListPlanosService
}
