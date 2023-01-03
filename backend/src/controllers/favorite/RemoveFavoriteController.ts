import { Request, Response } from "express";
import { RemoveFavoriteService } from "../../services/favorite/RemoveFavoriteService";

 class RemoveFavoriteController {
    async handle(req: Request, res: Response) {
        const favorite_id = req.body.favorite_id as string;

        const removeFavorite = new RemoveFavoriteService();

        const favorite = await removeFavorite.execute({
            favorite_id
        });

        return res.json(favorite)
    }
 }

 export { RemoveFavoriteController }