import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateItemController } from "./controllers/Item/CreateItemController";
import { ListByCategoryController } from "./controllers/Item/ListByCategoryController";
import { RemoveItemController } from "./controllers/Item/RemoveItemController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import { ListAllItemsController } from "./controllers/Item/ListAllItemsController";
import { CreateFaviriteController } from "./controllers/favorite/CreateFaviriteController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from './config/multer';

  const router = Router();

  const upload = multer(uploadConfig.upload("./tmp"));

  //-- ROTAS USER --
  router.post('/users', new CreateUserController().handle)

  router.post('/session', new AuthUserController().handle)

  router.get('/me', isAuthenticated, new DetailUserController().handle)


  //-- ROTAS CATEGORY --
  router.post('/category', isAuthenticated, new CreateCategoryController().handle)
  router.get('/category', isAuthenticated, new ListCategoryController().handle)
  router.delete('/category', isAuthenticated, new RemoveCategoryController().handle)

  //-- ROTAS ITEM --
  router.post('/item', isAuthenticated, upload.single('file'), new CreateItemController().handle)
  router.get('/category/item', isAuthenticated, new ListByCategoryController().handle)
  router.delete('/item', isAuthenticated, new RemoveItemController().handle)
  router.get('/item', isAuthenticated, new ListAllItemsController().handle)

  //-- ROTAS FAVORITE --
  router.post('/favorite', isAuthenticated, new CreateFaviriteController().handle)

  export { router }; 