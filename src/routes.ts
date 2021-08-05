import { Router } from 'express';
const router = Router();
import { multerConfig } from './config/multer';
import multer from 'multer';

router.get('/production', (req, res) => {
  return res.json({ msg: 'server running, Docker' })
});

import { AuthenticateUserController } from './controllers/postgres/AuthenticateUserController';
import { CreateCidadeControler } from './controllers/postgres/CreateCidadeControler';
import { CreateLojaController } from './controllers/postgres/CreateLojaController';
import { CreatePlanoController } from './controllers/postgres/CreatePlanoController';
import { CreateUserController } from './controllers/postgres/CreateUserController';
import { DeleteLojaController } from './controllers/postgres/DeleteLojaController';
import { ListCidadeByEstadoController } from './controllers/postgres/ListCidadeByEstadoController';
import { ListCidadesController } from './controllers/postgres/ListCidadesController';
import { ListLojasByCidadeController } from './controllers/postgres/ListLojasAndImageByCidadeController';
import { ListPlanosByCidadeController } from './controllers/postgres/ListPlanosByCidadeController';
import { ListPlanosController } from './controllers/postgres/ListPlanosController';
import { ListUserController } from './controllers/postgres/ListUsersController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { UpdateLojaController } from './controllers/postgres/UpdateLojaController';
import { UpdatePlanoController } from './controllers/postgres/UpdatePlanoController';
import { DeletePlanoController } from './controllers/postgres/DeletePlanoController';
import { UploadImageController } from './controllers/postgres/UploadImageController';
import { ListLojasController } from './controllers/postgres/ListLojasController';


const createCidadeControler = new CreateCidadeControler();
const createPlanoController = new CreatePlanoController();
const listCidadesController = new ListCidadesController();
const listPlanosController = new ListPlanosController();
const listPlanosByCidadeController = new ListPlanosByCidadeController();
const listCidadeByEstadoController = new ListCidadeByEstadoController();
const createLojaController = new CreateLojaController();
const listLojasByCidadeController = new ListLojasByCidadeController()
const createUserController = new CreateUserController();
const listUserController = new ListUserController()
const authenticateUserController = new AuthenticateUserController()
const deleteLojaController = new DeleteLojaController()
const updateLojaController = new UpdateLojaController()
const updatePlanoController = new UpdatePlanoController()
const deletePlanoController = new DeletePlanoController();
const uploadImageController = new UploadImageController()
const listLojasController = new ListLojasController()


router.post('/api/cidade', ensureAuthenticated, ensureAdmin, createCidadeControler.handle);
router.post('/api/cidades/estado', listCidadeByEstadoController.handle);
router.post('/api/plano', ensureAuthenticated, ensureAdmin, createPlanoController.handle);
router.post('/api/planos/:id', listPlanosByCidadeController.handle);
router.post('/api/loja', ensureAuthenticated, ensureAdmin, createLojaController.handle);
router.post('/api/loja/list/:id', listLojasByCidadeController.handle);
router.post('/api/user',  createUserController.handle);
router.post('/api/user/login', authenticateUserController.handle);
router.get('/api/cidades', listCidadesController.handle);
router.get('/api/planos', listPlanosController.handle);
router.get('/api/user/list', listUserController.handle);
router.put('/api/plano/:id', ensureAuthenticated, ensureAdmin, updatePlanoController.handle);
router.put('/api/loja/:id', ensureAuthenticated, ensureAdmin, updateLojaController.handle);
router.delete('/api/plano/:id', ensureAuthenticated, ensureAdmin, deletePlanoController.handle);
router.delete('/api/loja/:id', ensureAuthenticated, ensureAdmin, deleteLojaController.handle);
router.post('/api/image/:loja_id', multer(multerConfig).single('image'), uploadImageController.handle);
router.get('/api/loja', listLojasController.handle);


export {
  router
}
