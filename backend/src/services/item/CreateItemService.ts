import prismaClient from "../../prisma";

interface ItemRequest {
    name: string;
    banner: string;
    seasons: string;
    category_id: string;
}

   class CreateItemService {
    async execute({name, banner, seasons, category_id}: ItemRequest) {
        
        return { ok: true }
    }
   }

   export { CreateItemService }