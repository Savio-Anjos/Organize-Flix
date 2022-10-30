import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateItemController } from "./controllers/Item/CreateItemController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

  const router = Router();

  //-- ROTAS USER --
  router.post('/users', new CreateUserController().handle)

  router.post('/session', new AuthUserController().handle)

  router.get('/me', isAuthenticated, new DetailUserController().handle)


  //-- ROTAS CATEGORY --
  router.post('/category', isAuthenticated, new CreateCategoryController().handle)
  router.get('/category', isAuthenticated, new ListCategoryController().handle)

  //-- ROTAS ITEM --
  router.post('/item', isAuthenticated, new CreateItemController().handle)

  export { router }; 