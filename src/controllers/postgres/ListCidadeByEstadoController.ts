import { Request, Response } from "express";
import { ListCidadeByEstadoService } from "../../services/postgres/ListCidadeByEstadoService";

class ListCidadeByEstadoController {
  async handle(request: Request, response: Response) {
    const { estado } = request.body;

    const listCidadeByEstadoService = new ListCidadeByEstadoService();

    const cidadeEstado = await listCidadeByEstadoService.execute(estado);

    return response.json(cidadeEstado);
  }
}

export {
  ListCidadeByEstadoController
}
