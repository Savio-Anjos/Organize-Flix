import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";


 class CreateCategoryController {
    async handle(req: Request, res: Response) {
       const { name } = req.body;

       const createCategoryController = new CreateCategoryService();

       const category = await createCategoryController.execute({
        name
       })

       return res.json(category)
    }
 }

   export { CreateCategoryController }