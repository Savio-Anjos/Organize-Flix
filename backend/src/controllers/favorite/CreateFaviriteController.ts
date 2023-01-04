import { Request, Response } from "express";
import { CreateFavoriteService } from "../../services/favorite/CreateFavoriteService"; 

class CreateFaviriteController {
    async handle(req: Request, res: Response) {

        const { id, name } = req.body;

        const createFavoriteService = new CreateFavoriteService();

        const favorite = await createFavoriteService.execute({
            id,
            name,

        })

        return res.json(favorite);
    }
}

export { CreateFaviriteController }