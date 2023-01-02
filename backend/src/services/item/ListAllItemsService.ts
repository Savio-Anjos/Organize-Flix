import prismaClient from "../../prisma";


  class ListAllItemsService {
    async execute() {
        
        const item = await prismaClient.item.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return item;

    }
  }

  export { ListAllItemsService }