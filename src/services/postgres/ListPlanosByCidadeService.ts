import { getCustomRepository } from "typeorm";
import { PlanosRepositories } from "../../repositories/PlanosRepositories";

class ListPlanosByCidadeService {
  async execute(cidade_id: string, tipo: string,) {
    const planosRepositories = getCustomRepository(PlanosRepositories);

    const Residencial = await planosRepositories.find({
      where: {
        cidade_id: cidade_id,
        tipo: tipo = "Residencial",
      },
      order: {
        created_at: 'ASC',
      }
    });

    const Empresarial = await planosRepositories.find({
      where: {
        cidade_id: cidade_id,
        tipo: tipo = "Empresarial",
      },
      order: {
        created_at: 'ASC',
      }
    });

    return { Residencial, Empresarial };

  }
}

export {
  ListPlanosByCidadeService
}
