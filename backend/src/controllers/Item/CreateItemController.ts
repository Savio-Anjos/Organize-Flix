import { Request, Response } from "express";
import { CreateItemService } from "../../services/item/CreateItemService";

  class CreateItemController {
    async handle(req: Request, res: Response) {

        const { name, seasons, category_id } = req.body;
        
        const createItemService = new CreateItemService();

        if(!req.file) {
          throw new Error("Error upload file")
        } else {

          const { originalname, filename: banner } = req.file;


          const item = await createItemService.execute({
            name,
            seasons,
            banner,
            category_id
        });

        return res.json(item)

        }
    }
  }

  export { CreateItemController }