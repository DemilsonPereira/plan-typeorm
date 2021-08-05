import { getCustomRepository } from "typeorm";
import { CidadesRepositories } from "../../repositories/CidadesRepositories";

class ListCidadeByEstadoService {
  async execute(estado: string) {
    const cidadesRepositories = getCustomRepository(CidadesRepositories);

    const cidadeEstado = await cidadesRepositories.find({
      where: {
        estado: (estado.toUpperCase() || estado.toLocaleUpperCase())
      }
    });

    return cidadeEstado;

  }
}

export {
  ListCidadeByEstadoService
}
