import { getConnection, getCustomRepository } from "typeorm";
import { Loja } from "../../entities/Loja";
import { LojasRepositories } from "../../repositories/LojasRepositories";

class UpdateLojaService {
  async execute(id: string, cep: string, logradouro: string, numero: string, complemento: string, bairro: string, url_maps: string) {
    const lojasRepositories = getCustomRepository(LojasRepositories);

    if (!id) {
      throw new Error("Incorrect ID!");
    }

    const notIdLoja = await lojasRepositories.findOne({
      id
    });

    if (!notIdLoja) {
      throw new Error("ID doesn't exist!");
    }

    const updateLojaId = await getConnection()
      .createQueryBuilder()
      .update(Loja)
      .set({ cep: cep, logradouro: logradouro, numero: numero, complemento: complemento, bairro: bairro, url_maps: url_maps })
      .where({ id: id })
      .execute();

      return updateLojaId;
  }
}

export {
  UpdateLojaService
}
