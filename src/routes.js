import { Router } from 'express';

import SessionController from './controllers/SessionController';
import ProductController from './controllers/ProductController';

const routes = new Router();

routes.post('/login', SessionController.login);
routes.post('/user', SessionController.createUser);
routes.get('/usuarios', SessionController.index);
routes.post('/usuarios/search', SessionController.search);

routes.get('/products', ProductController.getAllAProducts);
routes.post('/product', ProductController.createProducts);

export default routes;