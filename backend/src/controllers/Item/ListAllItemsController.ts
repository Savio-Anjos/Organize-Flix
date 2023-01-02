import { Request, Response } from "express";
import { ListAllItemsService } from "../../services/item/ListAllItemsService";

    class ListAllItemsController {
        async handle(req: Request, res: Response) {

            const listAllItemsService = new ListAllItemsService();

            const item = await listAllItemsService.execute();

            return res.json(item)
        }
    }

    export { ListAllItemsController }