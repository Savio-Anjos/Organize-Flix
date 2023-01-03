import prismaClient from "../../prisma";

 class ListFavoriteService {
    async execute() {

        const favorite = prismaClient.favorite.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return favorite;
    }
 }

 export { ListFavoriteService }