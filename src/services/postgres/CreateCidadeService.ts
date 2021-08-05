import { getCustomRepository } from "typeorm";
import { CidadesRepositories } from "../../repositories/CidadesRepositories";

interface ICidadeRequest {
  cidade: string;
  estado: string;
}

class CreateCidadeService {
  async execute({ cidade, estado }: ICidadeRequest) {
    const cidadesRepositories = getCustomRepository(CidadesRepositories)

    if (!cidade) {
      throw new Error("Incorrect name!");
    }

    const cidadeAlreayExists = await cidadesRepositories.findOne({
      cidade
    });

    if (cidadeAlreayExists) {
      throw new Error("City already exists!");
    }

    const cidades = cidadesRepositories.create({
      cidade,
      estado
    });

    await cidadesRepositories.save(cidades);

    return cidades;
  }
}

export {
  CreateCidadeService
}
