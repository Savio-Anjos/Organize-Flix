import prismaClient from "../../prisma";

interface ItemRequest {
    name: string;
    banner: string;
    seasons: string;
    category_id: string;
}

   class CreateItemService {
    async execute({name, banner, seasons, category_id}: ItemRequest) {

        const item = await prismaClient.item.create({
            data: {
                name: name,
                banner: banner,
                seasons: seasons,
                category_id: category_id,
            }
        })
        
        return { item }
    }
   }

   export { CreateItemService }