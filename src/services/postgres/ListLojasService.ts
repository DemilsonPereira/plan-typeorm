import { classToPlain } from 'class-transformer';
import { getCustomRepository } from "typeorm";
import { LojasRepositories } from "../../repositories/LojasRepositories";


class ListLojasService {
  async execute() {
    const lojasRepositories = getCustomRepository(LojasRepositories);

    const listLojas = await lojasRepositories.find();

    return classToPlain(listLojas);

  }
}

export {
  ListLojasService
}
