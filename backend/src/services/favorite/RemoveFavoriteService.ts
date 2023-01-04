import prismaClient from "../../prisma";

interface FavoriteRequest {
    favorite_id: string;
}

 class RemoveFavoriteService {
    async execute( { favorite_id }: FavoriteRequest ) {

        const favorite = await prismaClient.favorite.delete({
            where: {
                id: favorite_id,
            }
        })

        return favorite;
    }
 }

 export { RemoveFavoriteService }  