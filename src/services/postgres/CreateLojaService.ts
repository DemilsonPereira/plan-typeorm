import { getCustomRepository } from "typeorm";
import { LojasRepositories } from "../../repositories/LojasRepositories";

class CreateLojaService {
  async execute({
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    url_maps,
    cidade_id
  }) {

    const lojasRepositories = getCustomRepository(LojasRepositories);

    if (!cep) {
      throw new Error("Incorrect cep!");
    }

    const lojaAlreayExists = await lojasRepositories.findOne({
      cep,
      cidade_id
    });

    if (lojaAlreayExists) {
      throw new Error("Store already exists");
    }

    const lojas = lojasRepositories.create({
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      url_maps,
      cidade_id
    });

    await lojasRepositories.save(lojas);

    return lojas;

  }
}

export {
  CreateLojaService
}
