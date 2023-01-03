import prismaClient from "../../prisma";

interface FavoriteRequest {
    id: string;
    name: string;
}

 class CreateFavoriteService {
    async execute({ id, name }: FavoriteRequest) {

        const favorite = await prismaClient.favorite.create({
            data: {
                id: id,
                name: name,
            }
        })

        return { favorite }                        
    
    }
 }

 export { CreateFavoriteService }