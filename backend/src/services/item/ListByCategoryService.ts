import prismaClient from "../../prisma";

  interface ItemRequest {
    category_id: string;
  }

  class ListByCategoryService {
    async execute({ category_id }: ItemRequest) {
        
        const findByCategory = await prismaClient.item.findMany({
            where: {
                category_id: category_id
            }
        })

        return findByCategory;

    }
  }

  export { ListByCategoryService }