import { Request, Response } from "express";
import { CreateItemService } from "../../services/item/CreateItemService";

  class CreateItemController {
    async handle(req: Request, res: Response) {

        const { name, seasons, category_id } = req.body;

        let banner = '';
        
        const createItemService = new CreateItemService();

        const item = await createItemService.execute({
            name,
            seasons,
            banner,
            category_id
        });

        return res.json(item)
    }
  }

  export { CreateItemController }