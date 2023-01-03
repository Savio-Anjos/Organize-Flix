import { Request, Response } from "express";
import { ListFavoriteService } from "../../services/favorite/ListFavoriteService";

 class ListFavoriteController {
    async handle(req: Request, res: Response) {

        const listFavoriteService = new ListFavoriteService();

        const favorite = await listFavoriteService.execute();

        return res.json(favorite);
    }
 }

 export { ListFavoriteController }