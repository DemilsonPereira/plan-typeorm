import { getCustomRepository } from "typeorm";
import { CidadesRepositories } from "../../repositories/CidadesRepositories";
import { classToPlain} from 'class-transformer';

class ListCidadesService{
  async execute(){
    const cidadesRepositories = getCustomRepository(CidadesRepositories);

    const cidades = await cidadesRepositories.find();

    return classToPlain(cidades);
  }
}

export {
  ListCidadesService
}
