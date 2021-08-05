require('dotenv').config();
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import "express-async-errors";
import path from 'path';
import { router } from './routes';
import './database';
import swaggerUi from 'swagger-ui-express';
import swagger from './swagger.json';
import morgan from 'morgan';

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.middlewares();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3333);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, 'build')));
    this.app.use(morgan('dev'));
    this.app.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    if (process.env.NODE_ENV === 'development') {
      this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))
    }
    this.app.use('/terms', (request, response) => {
      return response.json({
        message: "Termos de Serviço",
      });
    });
  }

  routes() {
    this.app.get('/', (request: Request, response: Response) => {
      response.json({ msg: "Serve Online!." });
    });
    this.app.use(router);
    this.app.use(
      (err: Error, resquest: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
          return response.status(400).json({
            error: err.message
          });
        }

        return response.status(500).json({
          status: "error",
          message: "Internal Server Error"
        })
      });
    this.app.use('/v1', router);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    })
  }
}

export {
  Server
}
